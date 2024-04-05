import Link from "next/link";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  label: string;
  bg?: "green" | "red";
  textCenter?: boolean;
  filePath?: string;
}>;

export function Boundary({ label, bg, textCenter, filePath, children }: Props) {
  return (
    <div
      className={[
        "relative p-2 rounded-sm animate-[rerender_1s_ease-in-out_1] border border-gray-500 border-dashed mt-6 h-full w-full",
        bg === "green" ? "bg-green-950" : "",
        bg === "red" ? "bg-red-950" : "",
        textCenter ? "text-center" : "",
      ].join(" ")}
    >
      <div className="absolute -top-4 ml-2 px-2 py-1 bg-gray-700 rounded-full text-sm animate-[highlight_1s_ease-in-out_1] text-gray-300">
        {filePath ? (
          <Link
            href={`?file-path=${filePath}`}
            className="hover:text-blue-300"
            replace
          >
            {label}
          </Link>
        ) : (
          <span>{label}</span>
        )}
      </div>
      <div className="mt-4 py-1 px-2 h-full">{children}</div>
    </div>
  );
}
