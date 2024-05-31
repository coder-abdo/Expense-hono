import { useGetUserProfileInfo } from "@/hooks/user/useGetUserProfile";

export const Profile = () => {
  const { data, isLoading, error } = useGetUserProfileInfo();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <div>
      <h1>hello {data.user?.family_name};</h1>
      <br />
      <a href="/api/logout">logout</a>
    </div>
  );
};
