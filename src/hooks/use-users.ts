import { User } from "@/types/user";

const API_BASE_URL = "https://jsonplaceholder.typicode.com";

// TODO: Implement useUsers hook using TanStack Query
export function useUsers() {
  return {
    data: undefined,
    isLoading: false,
    error: null,
  };
}

// TODO: Implement useUser hook using TanStack Query
export function useUser(id: number) {
  return {
    data: undefined,
    isLoading: false,
    error: null,
  };
}

// TODO: Implement useUpdateUser hook using TanStack Query
export function useUpdateUser(id: number) {
  return {
    mutate: (user: User) => {
      console.log("Update user not implemented", user);
    },
    isPending: false,
    error: null,
  };
}

// TODO: Implement useDeleteUser hook using TanStack Query
export function useDeleteUser(id: number) {
  return {
    mutate: () => {
      console.log("Delete user not implemented");
    },
    isPending: false,
    error: null,
  };
}
