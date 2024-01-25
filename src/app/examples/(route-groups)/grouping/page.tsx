import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";

export default function Page() {
  return (
    <Boundary label="Root Page" filePath="page.tsx">
      <div className="flex flex-col gap-4">
        <p className="text-gray-300">
          "(grouping)" will be skipped from the url path. This is useful when
          you want to separate the layouts even though they have the same path
          hierarchy.
        </p>
        <div className="flex justify-around">
          <Link href="/examples/grouping/admin">admin</Link>
          <Link href="/examples/grouping/items">items</Link>
        </div>
      </div>
    </Boundary>
  );
}
