import { Suspense } from "react";
import { Loading } from "../_components/loading";

// turn off full route cache for demo
export const dynamic = "force-dynamic";

async function Main() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  if (Date.now() % 2 === 0) {
    throw new Error("error 🥲");
  }

  return <span>hi 😁</span>;
}

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Main />
    </Suspense>
  );
}
