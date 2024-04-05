// [!code word:force-dynamic]
import { Boundary } from "@/app/_components/boundary";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
// or
// export const revalidate = 0;

export default function Page() {
  return (
    <div className="flex gap-4">
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
      😜 you can see this message even if production build
    </Boundary>
  );
}
