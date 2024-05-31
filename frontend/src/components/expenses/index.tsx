import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllExpenses } from "@/hooks/expenses/useGetAllExpenses";

export const Expenses = () => {
  const { data, isLoading, error } = useGetAllExpenses();
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <Table>
      <TableCaption>A list of your expenses.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>title</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map((expense) => (
          <TableRow key={expense.id}>
            <TableCell>{expense.title}</TableCell>
            <TableCell className="text-right">{expense.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
