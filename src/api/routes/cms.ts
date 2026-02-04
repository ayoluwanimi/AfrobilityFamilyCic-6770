import { Hono } from 'hono';
import { drizzle } from 'drizzle-orm/d1';
import { eq } from 'drizzle-orm';
import { articles, events } from '../database/schema';
import { authenticatedOnly } from '../middleware/authentication';

export const cmsRoutes = new Hono();

cmsRoutes.use('*', authenticatedOnly);

// Articles
cmsRoutes.get('/articles', async (c) => {
    const { env } = require("cloudflare:workers");
    const db = drizzle(env.DB);
    const allArticles = await db.select().from(articles).all();
    return c.json(allArticles);
});

cmsRoutes.post('/articles', async (c) => {
    const { env } = require("cloudflare:workers");
    const db = drizzle(env.DB);
    const body = await c.req.json();
    const newArticle = {
        ...body,
        id: crypto.randomUUID(),
        createdAt: new Date(),
    };
    await db.insert(articles).values(newArticle).run();
    return c.json(newArticle);
});

cmsRoutes.put('/articles/:id', async (c) => {
    const { env } = require("cloudflare:workers");
    const db = drizzle(env.DB);
    const id = c.req.param('id');
    const body = await c.req.json();
    await db.update(articles).set(body).where(eq(articles.id, id)).run();
    return c.json({ success: true });
});

cmsRoutes.delete('/articles/:id', async (c) => {
    const { env } = require("cloudflare:workers");
    const db = drizzle(env.DB);
    const id = c.req.param('id');
    await db.delete(articles).where(eq(articles.id, id)).run();
    return c.json({ success: true });
});

// Events
cmsRoutes.get('/events', async (c) => {
    const { env } = require("cloudflare:workers");
    const db = drizzle(env.DB);
    const allEvents = await db.select().from(events).all();
    return c.json(allEvents);
});

cmsRoutes.post('/events', async (c) => {
    const { env } = require("cloudflare:workers");
    const db = drizzle(env.DB);
    const body = await c.req.json();
    const newEvent = {
        ...body,
        id: crypto.randomUUID(),
        date: new Date(body.date),
        createdAt: new Date(),
    };
    await db.insert(events).values(newEvent).run();
    return c.json(newEvent);
});

cmsRoutes.put('/events/:id', async (c) => {
    const { env } = require("cloudflare:workers");
    const db = drizzle(env.DB);
    const id = c.req.param('id');
    const body = await c.req.json();
    if (body.date) body.date = new Date(body.date);
    await db.update(events).set(body).where(eq(events.id, id)).run();
    return c.json({ success: true });
});

cmsRoutes.delete('/events/:id', async (c) => {
    const { env } = require("cloudflare:workers");
    const db = drizzle(env.DB);
    const id = c.req.param('id');
    await db.delete(events).where(eq(events.id, id)).run();
    return c.json({ success: true });
});
