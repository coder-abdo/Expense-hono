import {
  numeric,
  pgTable,
  serial,
  text,
  index,
  timestamp,
} from "drizzle-orm/pg-core";

export const expensesSchema = pgTable(
  "expenses",
  {
    id: serial("id").primaryKey(),
    userId: text("user_id").notNull(),
    title: text("title").notNull(),
    amount: numeric("amount", { precision: 12, scale: 2 }).notNull(),
    createdAt: timestamp("created_at").defaultNow(),
  },
  (expenses) => {
    return {
      userIndex: index("user_idx").on(expenses.userId),
    };
  },
);
