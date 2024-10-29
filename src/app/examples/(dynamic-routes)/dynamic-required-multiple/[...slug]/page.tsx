import { Link } from "@/app/_components/link";

type Props = {
  params: Promise<{
    slug: string[];
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  return (
    <div className="flex flex-col gap-4">
      <span>slug: {JSON.stringify(slug)}</span>
      <Link href="/examples/dynamic-required-multiple/one">
        👍 /dynamic-required-multiple/one
      </Link>
      <Link href="/examples/dynamic-required-multiple">
        👎 /dynamic-required-multiple
      </Link>
    </div>
  );
}
