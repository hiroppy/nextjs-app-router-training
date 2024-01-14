import { Boundary } from "@/app/_components/boundary";
import { Suspense } from "react";
import { Loading } from "../_components/loading";

async function Main() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // TODO: app router has a bug related to having errors in parallel routes.
  // dev works but prod doesn't.
  // if (Date.now() % 2 === 0) {
  //   throw new Error("error 🥲");
  // }

  return <Boundary label="Left">hi 😁</Boundary>;
}

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Main />
    </Suspense>
  );
}
