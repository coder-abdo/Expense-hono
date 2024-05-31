import { Login } from "@/components/auth/login";
import { queryOptions } from "@/lib/api";
import { Outlet, createFileRoute } from "@tanstack/react-router";

const Component = () => {
  const { user } = Route.useRouteContext();
  if (!user) return <Login />;
  return <Outlet />;
};
export const Route = createFileRoute("/_authenticated")({
  async beforeLoad({ context }) {
    try {
      const queryClient = context.queryClient;
      const data = await queryClient.fetchQuery(queryOptions);
      // console.log(data);
      return data;
    } catch (error) {
      return { user: null };
    }
  },
  component: Component,
});
