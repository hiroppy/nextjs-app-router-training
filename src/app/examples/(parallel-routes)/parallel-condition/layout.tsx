import { Boundary } from "@/app/_components/boundary";
import { cookies } from "next/headers";
import { type PropsWithChildren } from "react";
import { COOKIE_NAME } from "./constants";

type Props = PropsWithChildren<{
  dashboard: React.ReactNode;
  login: React.ReactNode;
}>;

export default function Layout({ dashboard, login, children }: Props) {
  const isLoggedIn = cookies().get(COOKIE_NAME)?.value === "true";

  return (
    <Boundary label="Layout">
      <div className="flex flex-col gap-2">
        <div className={[isLoggedIn ? "bg-green-950" : "bg-red-950"].join(" ")}>
          {isLoggedIn ? dashboard : login}
        </div>
        {children}
      </div>
    </Boundary>
  );
}
