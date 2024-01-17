export async function getNow(qs?: string) {
  const res = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/examples/request-memoization/api?q=${qs}`,
      {
        // don't store as a cache to understand Request Memoization clarify
        // this "cache" stage is Data Cache
        cache: "no-store",
      },
    )
  ).json();

  return res.now;
}
