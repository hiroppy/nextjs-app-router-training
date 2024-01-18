import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";

export default function Page() {
  return (
    <Boundary label="Root Page" textCenter>
      <Link href="/examples/nesting-layouts/child">go to the child page</Link>
    </Boundary>
  );
}
