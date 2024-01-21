import { Boundary } from "@/app/_components/boundary";
import type { Metadata } from "next";
import { MetaList } from "../../_components/metaList";

export const metadata: Metadata = {
  title: "🐶",
  description: "🐶 <3",
  openGraph: {
    title: "🐶",
    description: "🐶 <3",
  },
};

const path = "overwriting-meta/static";

export default function Page() {
  return (
    <Boundary label={`/${path}`}>
      <MetaList path={path} />
    </Boundary>
  );
}
