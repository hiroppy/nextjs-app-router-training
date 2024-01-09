import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return <div className="bg-green-900 p-4">{children}</div>;
}
