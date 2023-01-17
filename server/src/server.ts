import cors from "@fastify/cors";
import fastify from "fastify";
import { PrismaClient } from "prisma/prisma-client";

const app = fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get("/hello", async () => {
  const habits = await prisma.habit.findMany();

  return habits;
});

app.listen({ port: 3333 }).then(() => {
  console.log("Server is running on port 3333.");
});
