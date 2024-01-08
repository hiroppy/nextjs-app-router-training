import Link from "next/link";

type Props = {
  params: {
    slug: string[];
  };
};

export default function Page({ params }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <span>slug: {JSON.stringify(params.slug)}</span>
      <Link href="/examples/dynamic-optional-multiple/one">
        👉 "dynamic-optional-multiple/one" is OK
      </Link>
      <Link href="/examples/dynamic-optional-multiple">
        👉 "dynamic-optional-multiple" is OK
      </Link>
    </div>
  );
}
