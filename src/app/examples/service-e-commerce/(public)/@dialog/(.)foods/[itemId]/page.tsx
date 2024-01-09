import { getItem } from "@/app/examples/service-e-commerce/_utils/items";
import { type Item } from "@/app/examples/service-e-commerce/mock";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Dialog } from "../../_components/dialog";

type Props = {
  params: {
    itemId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <Dialog>
      <Suspense fallback={<Loading />}>
        <Main id={params.itemId} />
      </Suspense>
    </Dialog>
  );
}

async function Main({ id }: { id: string }) {
  const item = await getItem(id);

  if (!item) {
    return notFound();
  }

  return <Container {...item} />;
}

function Loading() {
  return <Container id={0} name="loading..." thumbnail="🐕" description="" />;
}

function Container({ name, description, thumbnail }: Item) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4 items-center">
        <span className="text-4xl">{thumbnail}</span>
        <h2>{name}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}
