import { Hono } from 'hono';
import { cors } from "hono/cors"

import { authRoutes } from './routes/auth';
import { cmsRoutes } from './routes/cms';
import { authMiddleware } from './middleware/authentication';

const app = new Hono()
  .basePath('api');

app.use(cors({
  origin: "*"
}))

app.use(authMiddleware)
app.route('/', authRoutes);
app.route('/cms', cmsRoutes);

app.get('/ping', (c) => c.json({ message: `Pong! ${Date.now()}` }));

export default app;