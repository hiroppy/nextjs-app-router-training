import type { Metadata, ResolvingMetadata } from "next";
import { Meta } from "./_components/meta";

type Params = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// for static data
// export const metadata: Metadata = {
//   title: "[modified]",
//   description: "[modified]",
// };

// for dynamic data
export async function generateMetadata(
  params: Params,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentTitle = (await parent).title?.absolute;
  const parentDescription = (await parent).description;

  return {
    title: `[modified] ${parentTitle}`,
    description: `[modified] ${parentDescription}`,
  };
}

export default function Page() {
  return <Meta />;
}
