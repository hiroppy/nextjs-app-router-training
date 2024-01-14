import { Boundary } from "@/app/_components/boundary";
import Link from "next/link";

export default function Page() {
  return (
    <Boundary label="Root Page">
      <div className="flex flex-col items-center justify-center h-full">
        <Link
          href="/examples/intercepting-modal/sign-up"
          className="w-fit border border-gray-600 py-1 px-4 rounded-md"
        >
          sign up
        </Link>
      </div>
    </Boundary>
  );
}
