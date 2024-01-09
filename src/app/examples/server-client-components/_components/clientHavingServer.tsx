// 👎 Don't import server components from client components then
// server components will run on browser side.
// Alternatively, You can pass a Server Component as a child or prop of a Client Component.

"use client";

import { Box } from "./box";
import { Server } from "./server";

export function ClientHavingServer() {
  return (
    <Box type="client" file="_components/clientHavingServer.tsx">
      <Server>
        <Server />
      </Server>
    </Box>
  );
}
