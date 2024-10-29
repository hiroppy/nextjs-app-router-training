import { Boundary } from "@/app/_components/boundary";
import { cookies } from "next/headers";
import type { PropsWithChildren } from "react";
import { COOKIE_NAME } from "./constants";

type Props = PropsWithChildren<{
  dashboard: React.ReactNode;
  login: React.ReactNode;
}>;

export default async function Layout({ dashboard, login, children }: Props) {
  const isLoggedIn = (await cookies()).get(COOKIE_NAME)?.value === "true";

  return (
    <Boundary label="Layout" filePath="layout.tsx">
      <div className="flex flex-col gap-2">
        {isLoggedIn ? dashboard : login}
        {children}
      </div>
    </Boundary>
  );
}
