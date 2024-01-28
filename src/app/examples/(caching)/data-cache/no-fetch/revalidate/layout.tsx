import { Boundary } from "@/app/_components/boundary";
import { PropsWithChildren } from "react";
import { getNow } from "../data";

export default async function Layout({ children }: PropsWithChildren) {
  const now = await getNow();

  return (
    <Boundary label="Revalidation">
      <Boundary
        label="layout: force-cache"
        filePath="no-fetch/revalidate/layout.tsx"
      >
        <p className="text-sm text-gray-400">
          layout depends on child's config
        </p>
        <p>{now}</p>
      </Boundary>
      {children}
    </Boundary>
  );
}
