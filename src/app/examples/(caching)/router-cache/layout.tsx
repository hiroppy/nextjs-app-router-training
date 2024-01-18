"use client";

import { Button } from "@/app/_components/button";
import { useMonitorRSCPayload } from "@/app/_hooks/useMonitorRSCPayload";
import { useRouter } from "next/navigation";
import { type PropsWithChildren, useEffect, useState } from "react";
import { TITLES } from "./constants";

const path = "/examples/router-cache";

export default function Layout({ children }: PropsWithChildren) {
  const { logs } = useMonitorRSCPayload(path);
  const [, setTime] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <div className="flex justify-end">
        <Button onClick={() => router.refresh()}>force purge cache</Button>
      </div>
      <div className="mt-2 flex gap-2 max-h-80 overflow-x-auto">
        <div className="w-1/2 h-full">{children}</div>
        <ul className="w-1/2 overflow-y-auto divide-y divide-gray-500 text-gray-400">
          {logs.map(({ path, createdAt, isNew }) => (
            <li
              key={`${path}_${createdAt}`}
              className={[
                isNew
                  ? "animate-[router-cache-highlight_2s_ease-in-out_1]"
                  : "",
              ].join(" ")}
            >
              <p className="text-right">{(Date.now() - createdAt) / 1000} s</p>
              <p className="text-sm font-semibold">
                {TITLES[Number(path)] ?? "/"}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
