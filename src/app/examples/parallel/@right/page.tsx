import { Suspense } from "react";
import { Loading } from "../_components/loading";

async function Main() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <span>hi 😁</span>;
}

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Main />
    </Suspense>
  );
}
