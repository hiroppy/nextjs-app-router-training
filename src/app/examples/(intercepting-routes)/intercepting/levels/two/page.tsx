import { Boundary } from "@/app/_components/boundary";
import Link from "next/link";

// (..)(..) doesn't work
// see https://github.com/vercel/next.js/issues/57016

export default function Page() {
  return (
    <Boundary label="/levels/two">
      <div className="flex flex-col gap-4">
        <Link href="/examples/intercepting/two-level-above">
          👉 /levels/two (..)(..)
        </Link>
      </div>
    </Boundary>
  );
}
