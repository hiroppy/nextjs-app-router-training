import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";

export default function Page() {
  return (
    <Boundary label="Page">
      <div className="flex flex-col gap-4">
        <p>There are two types of rendering methods</p>
        <ul className="list-disc list-inside">
          <li>Static Rendering (Default)</li>
          <li>Dynamic Rendering</li>
        </ul>
        <Link href="/examples/server-components/only-static">Only Static</Link>
        <Link href="/examples/server-components/static-dynamic">
          Static and Dynamic
        </Link>
      </div>
    </Boundary>
  );
}
