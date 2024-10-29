import { Boundary } from "@/app/_components/boundary";
import { Link } from "@/app/_components/link";
import { notFound } from "next/navigation";
import { TITLES } from "../constants";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { id } = await params;
  const title = TITLES[Number(id)];

  if (!title) {
    return notFound();
  }

  return (
    <Boundary label={title}>
      <div className="flex flex-col gap-4">
        <span className="text-gray-400 text-sm">{Date.now()}</span>
        <Link href="/examples/router-cache">back</Link>
      </div>
    </Boundary>
  );
}
