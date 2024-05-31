import { useQuery } from "@tanstack/react-query";
import { queryOptions } from "@/lib/api";

export const useGetUserProfileInfo = () => {
  const { data, isLoading, error } = useQuery(queryOptions);
  return {
    data,
    isLoading,
    error,
  };
};
