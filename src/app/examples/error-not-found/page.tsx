import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Link href="/examples/error-not-found/1">👉 200</Link>
      <Link href="/examples/error-not-found/2">👉 404</Link>
    </div>
  );
}
