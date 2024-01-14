import { Boundary } from "@/app/_components/boundary";
import Link from "next/link";

export default function Page() {
  return (
    <Boundary label="Root Page">
      <div className="flex flex-col gap-4">
        <Link href="/examples/intercepting/same-level">👉 /same-level (.)</Link>
        <Link href="/examples/intercepting/levels">
          👉 /levels (..), (..)(..)
        </Link>
      </div>
    </Boundary>
  );
}
