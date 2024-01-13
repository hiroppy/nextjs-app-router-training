import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <Link href={getUrl("revalidate-path", "revalidate-path/api/route.ts")}>
        👉 revalidatePath
      </Link>
      <Link href={getUrl("dog", "[revalidate-path-page]/api/route.ts")}>
        👉 revalidatePath for segments("[]")
      </Link>
      <Link
        href={getUrl(
          "revalidate-tag?animal=dog",
          "revalidate-tag/api/route.ts",
        )}
      >
        👉 revalidateTag
      </Link>
    </div>
  );
}

function getUrl(path: string, filename: string) {
  return `/examples/route-handlers-revalidating/${path}?file-path=${filename}`;
}
