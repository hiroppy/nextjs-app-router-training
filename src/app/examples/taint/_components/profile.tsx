import { getMyProfileWithTaintObjectReference } from "../api";
import { Client } from "./client";

export async function Profile() {
  const data = await getMyProfileWithTaintObjectReference();

  console.log(data);

  return (
    <div>
      <Client {...data} />
    </div>
  );
}
