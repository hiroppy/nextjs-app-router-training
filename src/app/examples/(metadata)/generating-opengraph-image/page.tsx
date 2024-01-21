import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";
import { MetaList } from "../_components/metaList";

const path = "generating-opengraph-image";

export default function Page() {
  return (
    <Boundary label={`/${path}`}>
      <div className="space-y-3">
        <div className="text-right">
          <Link href="/examples/generating-opengraph-image/foo?file-path=[slug]/opengraph-image.tsx">
            [slug] Page
          </Link>
        </div>
        <MetaList path={path} showOnlyImage />
      </div>
    </Boundary>
  );
}
