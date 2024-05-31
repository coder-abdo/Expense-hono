import { fetchTotalSpent } from "@/actions/expenses";
import { useQuery } from "@tanstack/react-query";

export const useGetTotalSpent = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["get-total-spent"],
    queryFn: fetchTotalSpent,
  });
  return {
    data,
    error,
    isLoading,
  };
};
