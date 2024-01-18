import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";
import { TITLES } from "./constants";

export default function Page() {
  return (
    <Boundary label="Page">
      <div className="flex flex-col gap-4 text-sm">
        <p className="text-gray-400">{Date.now()}</p>
        <Link href="/examples/router-cache/0" prefetch>
          {TITLES[0]}
        </Link>
        <Link href="/examples/router-cache/1" prefetch={false}>
          {TITLES[1]}
        </Link>
        <Link href="/examples/router-cache/2" prefetch={undefined}>
          {TITLES[2]}
        </Link>
      </div>
    </Boundary>
  );
}
