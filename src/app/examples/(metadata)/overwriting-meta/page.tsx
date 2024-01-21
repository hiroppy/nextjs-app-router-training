import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";
import { MetaList } from "../_components/metaList";

const path = "overwriting-meta";

export default function Page() {
  return (
    <Boundary label={`/${path}`}>
      <div className="space-y-4">
        <p>
          You can overwrite by{" "}
          <Link href="/examples/overwriting-meta/static?file-path=static/page.tsx">
            static
          </Link>{" "}
          or{" "}
          <Link href="/examples/overwriting-meta/dynamic?file-path=dynamic/page.tsx">
            dynamic
          </Link>
          .
        </p>
        <MetaList path={path} />
      </div>
    </Boundary>
  );
}
