import { Hono } from "hono";
import { userRoutes } from "./routes/userRoutes";
import { blogRoutes } from "./routes/blogRoutes";
import { cors } from "hono/cors";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: String;
    prisma: any;
  };
}>();

// app.use("/*", async (c, next) => {
//   const prisma = new PrismaClient({
//     datasourceUrl: c.env.DATABASE_URL,
//   }).$extends(withAccelerate());
//   c.set("prisma", prisma);
//   await next();
// });
app.use("/*", cors());
app.route("api/v1/user", userRoutes);
app.route("api/v1/blog", blogRoutes);

export default app;
