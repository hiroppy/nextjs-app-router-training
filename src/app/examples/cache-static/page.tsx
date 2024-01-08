import { Suspense } from "react";

export default function Page() {
  return (
    <div className="flex gap-4">
      <Suspense
        fallback={
          <span>😜 you can't see this message when production build</span>
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
