import { Boundary } from "@/app/_components/boundary";
import type { Metadata, ResolvingMetadata } from "next";
import { MetaList } from "../../_components/metaList";

const path = "overwriting-meta/dynamic";

type Params = {
  params: { id: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export async function generateMetadata(
  params: Params,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const parentInfo = await parent;
  const parentTitle = parentInfo.title?.absolute;
  const parentDescription = parentInfo.description;

  return {
    title: `🐭 ${parentTitle}`,
    description: `🐭 ${parentDescription}`,
  };
}

export default function Page() {
  return (
    <Boundary label={`/${path}`}>
      <MetaList path={path} />
    </Boundary>
  );
}
