import { Boundary } from "@/app/_components/boundary";
import { NOW_API_ENDPOINT, type NowResponse } from "@/constants";
import type { PropsWithChildren } from "react";

export default async function Layout({ children }: PropsWithChildren) {
  const { now }: NowResponse = await (await fetch(NOW_API_ENDPOINT)).json();

  return (
    <Boundary label="Revalidation">
      <Boundary label="layout: force-cache">
        <p className="text-sm text-gray-400">
          layout depends on child's config
        </p>
        <p>{now}</p>
      </Boundary>
      {children}
    </Boundary>
  );
}
