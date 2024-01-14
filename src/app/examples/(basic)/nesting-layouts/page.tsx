import { Boundary } from "@/app/_components/boundary";
import Link from "next/link";

export default function Page() {
  return (
    <Boundary label="Root Page">
      <Link
        href="/examples/nesting-layouts/child"
        className="block border border-gray-400 p-1 w-full text-center rounded-sm"
      >
        go to the child page
      </Link>
    </Boundary>
  );
}
