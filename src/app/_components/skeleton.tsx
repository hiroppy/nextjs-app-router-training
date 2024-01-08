import { type PropsWithChildren } from "react";

export function SkeletonBox({ children }: PropsWithChildren) {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      {children}
    </div>
  );
}
