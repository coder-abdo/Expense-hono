import { hc } from "hono/client";
import type { apiRoutes } from "@server/app";
import { UseQueryOptions } from "@tanstack/react-query";
import { getUserProfile } from "@/actions/user/profile";
const client = hc<apiRoutes>("/");
export const api = client.api;

export const queryOptions: UseQueryOptions = {
  queryKey: ["user-profile"],
  queryFn: getUserProfile,
};
