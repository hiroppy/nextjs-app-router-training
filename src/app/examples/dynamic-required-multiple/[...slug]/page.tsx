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
      <Link href="/examples/dynamic-required-multiple/one">
        👉 "dynamic-required-multiple/one" is OK
      </Link>
      <Link href="/examples/dynamic-required-multiple">
        👉 "dynamic-required-multiple" is NG
      </Link>
    </div>
  );
}
