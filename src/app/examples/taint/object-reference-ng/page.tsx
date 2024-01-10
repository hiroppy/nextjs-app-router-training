import { Client } from "../_components/client";
import { getMyProfileWithTaintObjectReference } from "../api";

// turn off full route cache for demo
export const dynamic = "force-dynamic";

export default async function Page() {
  const data = await getMyProfileWithTaintObjectReference();

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <p>👎 spread operator doesn't allow</p>
        <Client {...data} />
      </div>
      <div className="flex flex-col gap-4">
        <p>👎 don't separate each prop when using taintObjectReference</p>
        <Client id={data.id} name={data.name} password={data.password} />
      </div>
    </div>
  );
}
