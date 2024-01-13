import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <h2>root</h2>
      <Link href="/examples/intercepting/same-level">👉 /same-level (.)</Link>
      <Link href="/examples/intercepting/levels">
        👉 /levels (..), (..)(..)
      </Link>
    </div>
  );
}
