import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <h2>/levels</h2>
      <Link href="/examples/intercepting/one-level-above">
        👉 /one-level-above (..)
      </Link>
      <Link href="/examples/intercepting/levels/two">👉 /levels/two</Link>
    </div>
  );
}
