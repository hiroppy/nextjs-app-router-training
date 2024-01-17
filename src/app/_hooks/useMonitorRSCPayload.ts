import { useEffect, useState } from "react";

export type SWMessage = {
  url: string;
  createdAt: number;
  body: string;
};

export function useMonitorRSCPayload(
  path: `/${string}`,
  isIncludeRoot?: boolean,
) {
  const [logs, setLogs] = useState<
    {
      path: string;
      createdAt: number;
      body: string;
      isNew: boolean;
    }[]
  >([]);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      const data = e.data as SWMessage;
      const url = new URL(data.url);

      url.search = "";

      const item = {
        path: `${url}`.replace(
          `${process.env.NEXT_PUBLIC_SITE_URL}${path}/`,
          "",
        ),
        createdAt: data.createdAt,
        isNew: true,
        body: data.body,
      };

      if (
        (isIncludeRoot &&
          item.path === `${process.env.NEXT_PUBLIC_SITE_URL}/`) ||
        data.url.includes(path)
      ) {
        setLogs((prev) => {
          const index = prev.findIndex(({ path }) => path === item.path);

          if (index !== -1) {
            const updated = [...prev];

            updated[index] = item;

            return updated;
          }

          return [
            item,
            ...prev.map((data) => ({
              ...data,
              isNew: false,
            })),
          ];
        });
      }
    };

    if (process.env.NODE_ENV === "production" && navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener("message", handler);
    }

    return () => {
      if (process.env.NODE_ENV === "production" && navigator.serviceWorker) {
        navigator.serviceWorker.removeEventListener("message", handler);
      }
    };
  });

  return <const>{ logs };
}
