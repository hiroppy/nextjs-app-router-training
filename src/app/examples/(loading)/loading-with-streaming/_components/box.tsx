import { type PropsWithChildren } from "react";

export function Box({ children }: PropsWithChildren) {
  return (
    <div className="w-40 h-20 flex justify-center items-center bg-gray-700">
      {children}
    </div>
  );
}
