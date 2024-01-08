import type { Metadata, ResolvingMetadata } from "next";
import { Meta } from "../_components/meta";

type Params = {
  params: { id: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export async function generateMetadata(
  params: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentInfo = await parent;
  const parentTitle = parentInfo.title?.absolute;
  const parentDescription = parentInfo.description;

  return {
    title: `[modified] ${parentTitle}`,
    description: `[modified] ${parentDescription}`,
  };
}

export default function Page() {
  return <Meta />;
}
