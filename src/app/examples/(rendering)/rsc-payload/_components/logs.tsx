"use client";

import { Boundary } from "@/app/_components/boundary";
import { Button } from "@/app/_components/button";
import { useMonitorRSCPayload } from "@/app/_hooks/useMonitorRSCPayload";
import { useRouter } from "next/navigation";

export function Logs() {
  const { logs } = useMonitorRSCPayload("/examples/rsc-payload", true);
  const current = logs.pop();
  const router = useRouter();

  return (
    <Boundary label="Client: RSC Payload">
      <div className="w-100 overflow-auto">
        {current ? (
          <pre>{current.body}</pre>
        ) : (
          <Button onClick={() => router.refresh()}>reload</Button>
        )}
      </div>
    </Boundary>
  );
}
