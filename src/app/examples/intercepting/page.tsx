import Link from "next/link";

export default function Page() {
  return (
    <Link
      href="/examples/intercepting/sign-up"
      className="w-fit border border-gray-600 py-1 px-2 rounded-md"
    >
      sign up
    </Link>
  );
}
