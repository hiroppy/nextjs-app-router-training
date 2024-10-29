import { Boundary } from "@/app/_components/boundary";
import { notFound } from "next/navigation";
import { MetaList } from "../../_components/metaList";

const path = "generating-opengraph-image/foo";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  if (slug !== "foo") {
    return notFound();
  }

  return (
    <Boundary label={`/${path}`}>
      <MetaList path={path} showOnlyImage />
    </Boundary>
  );
}
