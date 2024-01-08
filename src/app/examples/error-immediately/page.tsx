// if you don't add this, build phase will fail
// turn off full route cache for demo
export const dynamic = "force-dynamic";

export default async function Page() {
  throw new Error("an error from server component");
}
