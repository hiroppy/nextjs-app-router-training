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
      <Link href="/examples/dynamic-optional-multiple/one">
        👍 /dynamic-optional-multiple/one
      </Link>
      <Link href="/examples/dynamic-optional-multiple">
        👍 /dynamic-optional-multiple
      </Link>
    </div>
  );
}
