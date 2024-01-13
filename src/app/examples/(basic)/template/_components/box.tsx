import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
}>;

export function Box({ title, children }: Props) {
  return (
    <div className="flex flex-col gap-2 border border-gray-600 p-2">
      <h2 className="text-lg">{title}</h2>
      <div className="mx-4">{children}</div>
    </div>
  );
}
