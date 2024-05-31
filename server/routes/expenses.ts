import { zValidator } from "@hono/zod-validator";
import { and, desc, eq, sum } from "drizzle-orm";
import { Hono } from "hono";
import { z } from "zod";
import { db } from "../db";
import { expensesSchema } from "../db/schema/expenses";
import { getUser } from "../kinde";

const expenseSchema = z.object({
  title: z.string(),
  amount: z.string(),
});
export const expenseRoute = new Hono()
  .get("/", getUser, async (c) => {
    const user = c.var.user;
    const expenses = await db
      .select()
      .from(expensesSchema)
      .orderBy(desc(expensesSchema.createdAt))
      .where(eq(expensesSchema.userId, user.id))
      .limit(100);
    return c.json({ expenses });
  })
  .get("/total-spent", getUser, async (c) => {
    const user = c.var.user;
    const total = await db
      .select({ total: sum(expensesSchema.amount) })
      .from(expensesSchema)
      .where(eq(expensesSchema.userId, user.id))
      .limit(1)
      .then((res) => res[0]);
    return c.json({ total });
  })
  .get("/:id{[0-9]+}", getUser, async (c) => {
    const id = Number(c.req.param("id"));
    const user = c.var.user;
    const result = await db
      .select()
      .from(expensesSchema)
      .where(and(eq(expensesSchema.id, id), eq(expensesSchema.userId, user.id)))
      .limit(1)
      .then((res) => res[0]);
    if (!result) {
      return c.notFound();
    }
    return c.json({ expense: result });
  })
  .post("/", getUser, zValidator("json", expenseSchema), async (c) => {
    const expense = c.req.valid("json");
    const user = c.var.user;
    const result = await db
      .insert(expensesSchema)
      .values({ ...expense, userId: user.id })
      .returning();
    return c.json(result);
  })
  .delete("/:id{[0-9]+}", getUser, async (c) => {
    const id = Number(c.req.param("id"));
    const user = c.var.user;
    const result = await db
      .delete(expensesSchema)
      .where(and(eq(expensesSchema.id, id), eq(expensesSchema.userId, user.id)))
      .returning()
      .then((res) => res[0]);
    if (!result) {
      return c.notFound();
    }
    return c.json({ expense: result });
  });
