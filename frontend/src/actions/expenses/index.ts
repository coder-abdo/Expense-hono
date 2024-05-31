import { api } from "@/lib/api";
// get total spent
async function fetchTotalSpent() {
  const res = await api.expenses["total-spent"].$get();
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data.total;
}
// get all expenses
async function fetchAllExpenses() {
  const res = await api.expenses.$get();
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data.expenses;
}
// create expense
async function createExpense(value: { title: string; amount: string }) {
  const res = await api.expenses.$post({ json: value });
  if (!res.ok) {
    throw new Error(res.statusText);
  }
}

export { fetchTotalSpent, createExpense, fetchAllExpenses };
