import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
}>;

export function Section({ title, children }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div>{children}</div>
    </div>
  );
}
