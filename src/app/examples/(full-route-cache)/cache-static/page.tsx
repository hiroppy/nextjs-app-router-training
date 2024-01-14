import { Boundary } from "@/app/_components/boundary";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex gap-4 w-full">
      <Suspense fallback={<Loading />}>
        <Main />
      </Suspense>
    </div>
  );
}

async function Main() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <Boundary label="Page">loaded!</Boundary>;
}

function Loading() {
  return (
    <Boundary label="Loading">
      😜 you can't see this message when production build
    </Boundary>
  );
}
