import { convertFilePathToURLParam } from "@/app/_utils/filePath";
import Link from "next/link";

export default function Page() {
  return (
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
  );
}

function getUrl(kind: string, filename: string) {
  return `/examples/taint/${kind}?file-path=${convertFilePathToURLParam(
    `${kind}/${filename}`,
  )}`;
}
