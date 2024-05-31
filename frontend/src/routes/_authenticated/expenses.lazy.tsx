import { Expenses } from "@/components/expenses";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_authenticated/expenses")({
  component: Expenses,
});
