import { Boundary } from "@/app/_components/boundary";
import { Child } from "./_components/child";
import { getNow } from "./_utils/fetcher";

export default async function Page() {
  const now = await getNow();

  return (
    <Boundary label="Page">
      {now}
      <Child label="child" />
      <Child label="child with params" qs="foo" />
    </Boundary>
  );
}
