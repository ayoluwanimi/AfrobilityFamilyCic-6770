import { Hono } from 'hono';
import { cors } from "hono/cors"
import { secureHeaders } from 'hono/secure-headers'
import { drizzle } from 'drizzle-orm/d1';
import bcrypt from 'bcryptjs';
import * as schema from './database/schema';

import { authRoutes } from './routes/auth';
import { cmsRoutes } from './routes/cms';
import { authMiddleware } from './middleware/authentication';

type Bindings = {
  VITE_BASE_URL: string;
  DB: D1Database;
}

const app = new Hono<{ Bindings: Bindings }>()
  .basePath('api');

// Security Headers
app.use('*', secureHeaders());

// CORS Configuration
app.use('*', async (c, next) => {
  const origin = c.env.VITE_BASE_URL || '*';
  const corsMiddleware = cors({
    origin: origin,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    exposeHeaders: ['Content-Length', 'X-Kuma-Revision'],
    maxAge: 600,
    credentials: true,
  });
  return corsMiddleware(c, next);
});

// Setup Admin Endpoint (One-time use)
app.get('/setup-admin', async (c) => {
  const db = drizzle(c.env.DB, { schema });
  
  // Check if any admin already exists
  const existingAdmin = await db.query.user.findFirst({
    where: (user, { eq }) => eq(user.role, 'Admin')
  });

  if (existingAdmin) {
    return c.json({ message: "Setup already completed. Admin account exists." }, 403);
  }

  try {
    const adminEmail = "ayoluwanimi@gmail.com";
    const adminPassword = "Cmmunity@1";
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    const userId = crypto.randomUUID();
    const now = new Date();

    // Create User
    await db.insert(schema.user).values({
      id: userId,
      name: "Admin",
      email: adminEmail,
      emailVerified: true,
      role: "Admin",
      createdAt: now,
      updatedAt: now,
    });

    // Create Account for Better Auth
    await db.insert(schema.account).values({
      id: crypto.randomUUID(),
      userId: userId,
      accountId: userId,
      providerId: "email-password",
      password: hashedPassword,
      createdAt: now,
      updatedAt: now,
    });

    return c.json({ message: "Admin account created successfully." });
  } catch (error) {
    console.error("Failed to setup admin:", error);
    return c.json({ message: "Failed to create admin account.", error: String(error) }, 500);
  }
});

app.route('/', authRoutes);
app.use('/cms/*', authMiddleware);
app.route('/cms', cmsRoutes);

app.get('/ping', (c) => c.json({ message: `Pong! ${Date.now()}` }));

export default app;
