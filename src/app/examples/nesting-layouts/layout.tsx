import { type PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-teal-500 h-full p-4 text-gray-800">
      <p>child layout</p>
      <div className="pt-4">{children}</div>
    </div>
  );
}
