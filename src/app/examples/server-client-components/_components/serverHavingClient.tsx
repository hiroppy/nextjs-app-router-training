import { Box } from "./box";
import { Client } from "./client";
import { Server } from "./server";

export function ServerHavingClient() {
  let isClientComponent = false;

  if (typeof window !== "undefined") {
    isClientComponent = true;
  }

  return (
    <Box
      type="server"
      actualType={isClientComponent ? "client" : "server"}
      file="_components/serverHavingClient.tsx"
    >
      <Client>
        <Server />
      </Client>
    </Box>
  );
}
