import Link from "next/link";
import type { PropsWithChildren } from "react";

type Type = "server" | "client";

type Props = PropsWithChildren<{
  type: Type;
  actualType?: Type;
  file?: string;
}>;

export function Box({ type, actualType, file, children }: Props) {
  return (
    <div
      className={[
        "flex flex-col gap-2 p-1 border border-gray-400 rounded-md",
        (actualType ?? type) === "client" ? "bg-orange-800" : "bg-sky-800",
      ].join(" ")}
    >
      <div className="flex items-center justify-between">
        <p className="text-lg">{type}</p>
        {file && (
          <Link
            href={`/examples/server-client-components?file-path=${file}`}
            className="text-sm text-gray-300"
          >
            Code
          </Link>
        )}
      </div>
      <div className="ml-4">{children}</div>
    </div>
  );
}
