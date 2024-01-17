import { Link } from "@/app/_components/link";

type Props = {
  params: {
    slug: string[];
  };
};

export default function Page({ params }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <span>slug: {JSON.stringify(params.slug)}</span>
      <Link href="/examples/dynamic-required-multiple/one">
        👍 /dynamic-required-multiple/one
      </Link>
      <Link href="/examples/dynamic-required-multiple">
        👎 /dynamic-required-multiple
      </Link>
    </div>
  );
}
