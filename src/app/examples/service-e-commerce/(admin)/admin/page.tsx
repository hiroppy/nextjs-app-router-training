import { convertFilePathToURLParam } from "@/app/_utils/filePath";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <p>
        Here is an admin page isolated from "(public)" root layout, and
        "(admin)" root layout validates the cookie so all pages under "(admin)"
        can't access from non-admin users.
      </p>
      <Link
        href={`/examples/service-e-commerce/admin?file-path=${convertFilePathToURLParam(
          "(admin)/layout.tsx",
        )}`}
      >
        check
      </Link>
    </div>
  );
}
