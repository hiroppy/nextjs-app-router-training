import { Boundary } from "@/app/_components/boundary";
import Link from "next/link";

export default function Page() {
  return (
    <Boundary label="/levels">
      <div className="flex flex-col gap-4">
        <Link href="/examples/intercepting/one-level-above">
          👉 /one-level-above (..)
        </Link>
        <Link href="/examples/intercepting/levels/two">👉 /levels/two</Link>
      </div>
    </Boundary>
  );
}
