import { type PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
}>;

export function Box({ title, children }: Props) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5 p-2 text-gray-300">
      <h2 className="text-gray-200 text-xl font-semibold">{title}</h2>
      {children}
    </div>
  );
}
