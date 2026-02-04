import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { drizzle } from 'drizzle-orm/d1';
import * as schema from './database/schema';

export const createAuth = (baseURL: string) => {
  const { env } = require("cloudflare:workers");
  const db = drizzle(env.DB, { schema });
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: 'sqlite',
    }),
    emailAndPassword: {
      enabled: true,
    },
    secret: env.BETTER_AUTH_SECRET || "fallback-secret-for-schema-gen",
    baseURL,
    trustedOrigins: async (request) => {
      const origin = request?.headers.get("origin");
      if (origin) return [origin];
      return [];
    },
  });
}

// Static export for CLI schema generation
// We provide a mock/minimal config for the CLI if env is not available
export const auth = (() => {
  try {
    const { env } = require("cloudflare:workers");
    return createAuth(env.VITE_BASE_URL ?? "http://localhost:5173");
  } catch (e) {
    // This part runs during CLI schema generation
    return betterAuth({
      database: {
        provider: "sqlite",
        dialect: "sqlite"
      },
      emailAndPassword: { enabled: true }
    });
  }
})();
