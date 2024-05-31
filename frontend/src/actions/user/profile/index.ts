import { api } from "@/lib/api";

export async function getUserProfile() {
  const res = await api.me.$get();
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data;
}
