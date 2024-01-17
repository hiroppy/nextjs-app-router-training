import { Link } from "@/app/_components/link";

export default function Page() {
  return (
    <div className="flex justify-around">
      <Link href="/examples/error-not-found/1">200</Link>
      <Link href="/examples/error-not-found/2">404</Link>
    </div>
  );
}
