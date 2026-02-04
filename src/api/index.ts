import { Hono } from 'hono';
import { cors } from "hono/cors"
import { secureHeaders } from 'hono/secure-headers'

import { authRoutes } from './routes/auth';
import { cmsRoutes } from './routes/cms';
import { authMiddleware } from './middleware/authentication';

type Bindings = {
  VITE_BASE_URL: string;
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

app.use(authMiddleware)
app.route('/', authRoutes);
app.route('/cms', cmsRoutes);

app.get('/ping', (c) => c.json({ message: `Pong! ${Date.now()}` }));

export default app;
