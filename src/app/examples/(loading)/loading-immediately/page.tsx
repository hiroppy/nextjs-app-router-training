import { Boundary } from "@/app/_components/boundary";

// turn off full route cache for demo
export const dynamic = "force-dynamic";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <Boundary label="Page">hi!</Boundary>;
}
