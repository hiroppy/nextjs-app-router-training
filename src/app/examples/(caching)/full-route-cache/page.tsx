import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";
import { PropsWithChildren } from "react";

export default function Page() {
  return (
    <Boundary label="Page">
      <div className="flex flex-col gap-2">
        <ExampleLink kind="static">static (default)</ExampleLink>
        <ExampleLink kind="dynamic">dynamic</ExampleLink>
        <ExampleLink kind="revalidation">revalidation (5s)</ExampleLink>
      </div>
    </Boundary>
  );
}

function ExampleLink({
  kind,
  children,
}: PropsWithChildren<{
  kind: "static" | "dynamic" | "revalidation";
}>) {
  return (
    <Link
      href={`/examples/full-route-cache/${kind}?file-path=${`${kind}/page.tsx`}`}
    >
      {children}
    </Link>
  );
}
