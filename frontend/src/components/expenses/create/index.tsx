import { zodValidator } from "@tanstack/zod-form-adapter";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCreateExpense } from "@/hooks/expenses/useCreateExpense";
import { createExpenseSchema } from "../../../../../server/shared/validationType";

export const CreateExpense = () => {
  const { form, handleSubmit } = useCreateExpense();

  return (
    <form
      className="flex justify-center flex-col items-center w-full max-w-md mx-auto py-10 gap-10"
      onSubmit={handleSubmit}
    >
      <div>
        <form.Field
          name="title"
          validatorAdapter={zodValidator}
          validators={{
            onChange: createExpenseSchema.shape.title,
          }}
          children={(field) => (
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
        <form.Field
          name="amount"
          validatorAdapter={zodValidator}
          validators={{
            onChange: createExpenseSchema.shape.amount,
          }}
          children={(field) => (
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="amount">Amount</Label>
              <Input
                id="amount"
                type="number"
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </div>
          )}
        />
      </div>
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <Button type="submit" disabled={!canSubmit}>
            {isSubmitting ? "..." : "Submit"}
          </Button>
        )}
      />
    </form>
  );
};
