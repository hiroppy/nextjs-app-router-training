import Link from "next/link";

// (..)(..) doesn't work
// see https://github.com/vercel/next.js/issues/57016

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <h2>/levels/two</h2>
      <Link href="/examples/intercepting/two-level-above">
        👉 /levels/two (..)(..)
      </Link>
    </div>
  );
}
