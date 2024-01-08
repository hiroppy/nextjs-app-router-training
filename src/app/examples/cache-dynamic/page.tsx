import { Suspense } from "react";

export const dynamic = "force-dynamic";
// or
// export const revalidate = 0;

export default function Page() {
  return (
    <div className="flex gap-4">
      <Suspense
        fallback={
          <span>😜 you can see this message even if production build</span>
        }
      >
        <Main />
      </Suspense>
    </div>
  );
}

async function Main() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return <span>loaded!</span>;
}
