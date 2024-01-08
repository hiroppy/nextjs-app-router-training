import Link from "next/link";
import { Box } from "./_components/box";

export default function Page() {
  return (
    <Box title="page">
      <Link
        href="/examples/template/child"
        className="block border border-gray-400 p-1 w-full text-center rounded-sm"
      >
        go to the child page
      </Link>
    </Box>
  );
}
