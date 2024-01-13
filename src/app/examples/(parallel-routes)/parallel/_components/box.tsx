import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
}>;

export function Box({ title, children }: Props) {
  return (
    <div className="w-40 h-20 flex flex-col items-center gap-4 bg-gray-700 py-1 text-lg">
      <p>{title}</p>
      {children}
    </div>
  );
}
