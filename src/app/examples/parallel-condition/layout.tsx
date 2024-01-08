import { type PropsWithChildren } from "react";
import { getUser } from "./_utils/auth";

type Props = PropsWithChildren<{
  dashboard: React.ReactNode;
  login: React.ReactNode;
}>;

export default function Layout({ dashboard, login, children }: Props) {
  const isLoggedIn = getUser();

  return (
    <div className="flex flex-col gap-2 bg-slate-700 p-4">
      {isLoggedIn ? dashboard : login}
      {children}
    </div>
  );
}
