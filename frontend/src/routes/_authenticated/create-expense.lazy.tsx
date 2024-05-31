import { CreateExpense } from "@/components/expenses/create";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated/create-expense")({
  component: CreateExpense,
});

