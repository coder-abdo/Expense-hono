import { fetchAllExpenses } from "@/actions/expenses";
import { useQuery } from "@tanstack/react-query";
export const useGetAllExpenses = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["get-total-spent"],
    queryFn: fetchAllExpenses,
  });
  return {
    data,
    error,
    isLoading,
  };
};
