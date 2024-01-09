import { cache } from "react";

// if you use `fetch`, you won't need to use `cache` since `fetch` has cache system
export const getItem = cache(async (id: number) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return id;
});

export async function isSignIn() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return true;
}
