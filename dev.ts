import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();
app.use("*", serveStatic({ root: "./public/" }));

export default {
    port: 4000,
    fetch: app.fetch,
} 