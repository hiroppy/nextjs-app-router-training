import { notFound } from "next/navigation";

type Props = {
  params: {
    id: string;
  };
};

export default async function Page({ params }: Props) {
  const item = await getItem(params.id);

  if (item) {
    return <span>🍎</span>;
  }

  return notFound();
}

async function getItem(id: string) {
  if (id === "1") {
    return true;
  }

  return false;
}
