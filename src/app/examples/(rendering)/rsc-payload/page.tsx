import { Logs } from "./_components/logs";
import { Server } from "./_components/server";

// turn off full route cache for demo
export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div>
      <Server />
      <Logs />
    </div>
  );
}
