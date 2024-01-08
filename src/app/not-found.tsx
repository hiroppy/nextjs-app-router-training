import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center p-6 gap-6">
      <h2 className="text-2xl">Page not found 🥲</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Home</Link>
    </div>
  );
}
