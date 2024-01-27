import { Boundary } from "@/app/_components/boundary";
import { NOW_API_ENDPOINT, NowResponse } from "@/constants";
import { PropsWithChildren } from "react";

export default async function Layout({ children }: PropsWithChildren) {
  const { now }: NowResponse = await (await fetch(NOW_API_ENDPOINT)).json();

  return (
    <Boundary label="Revalidation">
      <div className="flex flex-col gap-4">
        <p>
          {now}{" "}
          <span className="text-sm text-gray-400">
            {"(depends on child's config)"}
          </span>
        </p>
        {children}
      </div>
    </Boundary>
  );
}
