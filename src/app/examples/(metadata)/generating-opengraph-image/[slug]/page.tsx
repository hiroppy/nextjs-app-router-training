import { Boundary } from "@/app/_components/boundary";
import { notFound } from "next/navigation";
import { MetaList } from "../../_components/metaList";

const path = "generating-opengraph-image/foo";

type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  if (params.slug !== "foo") {
    return notFound();
  }

  return (
    <Boundary label={`/${path}`}>
      <MetaList path={path} showOnlyImage />
    </Boundary>
  );
}
