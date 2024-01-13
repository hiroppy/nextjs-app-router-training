import { type PropsWithChildren } from "react";
import { Box } from "./_components/box";

type Props = PropsWithChildren<{
  left: React.ReactNode;
  right: React.ReactNode;
}>;

export default function Layout({ left, right, children }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-1">
        <Box title="@left">{left}</Box>
        <Box title="@right">{right}</Box>
      </div>
      {children}
    </div>
  );
}
