import { Link } from "@/app/_components/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Here is an admin page isolated from "(public)" root layout, and
        "(admin)" root layout validates the cookie so all pages under "(admin)"
        can't access from non-admin users.
      </p>
      <Link href="/examples/service-e-commerce/admin?file-path=(admin)/layout.tsx">
        check the validation code
      </Link>
    </div>
  );
}
