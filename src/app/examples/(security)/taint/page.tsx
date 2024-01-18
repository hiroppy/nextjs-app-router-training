import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";

export default function Page() {
  return (
    <Boundary label="Root Page">
      <div className="flex flex-col gap-4">
        <Link href={getUrl("object-reference-ok", "page.tsx")}>
          👍 taintObjectReference
        </Link>
        <Link href={getUrl("object-reference-ng", "page.tsx")}>
          👎 taintObjectReference
        </Link>
        <Link href={getUrl("unique-value-ok", "page.tsx")}>
          👍 taintUniqueValue
        </Link>
      </div>
    </Boundary>
  );
}

function getUrl(kind: string, filename: string) {
  return `/examples/taint/${kind}?file-path=${kind}/${filename}`;
}
