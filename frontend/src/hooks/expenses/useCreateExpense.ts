import { createExpense } from "@/actions/expenses";
import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { FormEvent } from "react";

export const useCreateExpense = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      title: "",
      amount: "0",
    },
    onSubmit: async ({ value }) => {
      await createExpense(value);
      navigate({ to: "/expenses" });
    },
  });
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    form.handleSubmit();
  };
  return { form, handleSubmit };
};
