// turn off full route cache for demo
export const dynamic = "force-dynamic";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <span>hi!</span>;
}
