"use client";

import { useGetMeta } from "../_hooks/useGetMeta";

type Props = {
  path: string;
  showOnlyImage?: boolean;
};

export function MetaList({ path, showOnlyImage }: Props) {
  const { meta } = useGetMeta(path);

  if (!meta) {
    return null;
  }

  const data = Object.fromEntries(
    Object.entries(meta).filter(([key]) =>
      showOnlyImage ? key.startsWith("og:image") : true,
    ),
  );

  return (
    <div className="space-y-2 text-sm">
      {Object.entries(data).map(([key, value]) => (
        <div className="flex gap-5 justify-between">
          <span className="text-gray-400">{key}</span>
          {key === "og:image" && value ? (
            <img src={value} alt="og-image-sample" className="w-44" />
          ) : (
            <span className="truncate">{value}</span>
          )}
        </div>
      ))}
    </div>
  );
}
