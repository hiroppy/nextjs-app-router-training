import { Boundary } from "@/app/_components/boundary";
import { Suspense } from "react";
import { Loading } from "../_components/loading";

async function Main() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <Boundary label="Right">hi 😁</Boundary>;
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Main />
    </Suspense>
  );
}
