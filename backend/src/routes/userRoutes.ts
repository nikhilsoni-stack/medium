import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signupInput } from "../zod";

export const userRoutes = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: String;
    prisma: any;
  };
}>();

userRoutes.post("/signup", async (c) => {
  // this the way we get body
  //const prisma: PrismaClient = c.get("prisma");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "inputs not correct ",
    });
  }
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: body.password,
      name: body?.name,
    },
  });

  const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  return c.json(token);
});

userRoutes.post("/signin", (c) => {
  return c.text("Hello Hono!");
});
