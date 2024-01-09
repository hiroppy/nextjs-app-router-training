import { Client } from "./_components/client";
import { ClientHavingServer } from "./_components/clientHavingServer";
import { Server } from "./_components/server";
import { ServerHavingClient } from "./_components/serverHavingClient";

export default function Page() {
  return (
    <div className="flex flex-col gap-1">
      <Labels />
      <div className="grid grid-cols-2 gap-2">
        <Client file="page.tsx">
          <Server>
            <Client>
              <Server />
            </Client>
          </Server>
        </Client>

        <Server file="page.tsx">
          <Client>
            {/* You can pass a Server Component as a child or prop of a Client Component. */}
            <Server>
              <Client />
            </Server>
          </Client>
        </Server>

        <ClientHavingServer />

        <ServerHavingClient />
      </div>
    </div>
  );
}

function Labels() {
  return (
    <div className="flex gap-4 justify-end">
      <p>server: blue</p>
      <p>client: red</p>
    </div>
  );
}
