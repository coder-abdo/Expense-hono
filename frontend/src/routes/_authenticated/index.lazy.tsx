import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useGetTotalSpent } from "@/hooks/expenses/useGetTotalSpent";

export const Route = createLazyFileRoute("/_authenticated/")({
  component: Index,
});
function Index() {
  const { error, isLoading, data: totalSpent } = useGetTotalSpent();
  if (isLoading) {
    return <div className="text-2xl">loading...</div>;
  }
  return (
    <div className="flex justify-center items-center w-full h-screen">
      {error && <div>{error.message}</div>}
      <Card className="w-[350px] mx-auto capitalize">
        <CardHeader>
          <CardTitle>total spent</CardTitle>
          <CardDescription>the total amount you've spent</CardDescription>
        </CardHeader>
        {totalSpent?.total ? (
          <CardContent>{totalSpent?.total}</CardContent>
        ) : (
          <CardContent>0</CardContent>
        )}
      </Card>
    </div>
  );
}
