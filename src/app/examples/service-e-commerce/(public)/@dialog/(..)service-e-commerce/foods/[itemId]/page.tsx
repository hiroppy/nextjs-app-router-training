import { Suspense } from "react";
import { Item, items } from "../../../../../mock";
import { Dialog } from "../../../_components/dialog";

type Props = {
  params: {
    itemId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <Dialog>
      <Suspense fallback={<A id={0} name="aa" thumbnail="🐕" description="" />}>
        <Main id={params.itemId} />
      </Suspense>
    </Dialog>
  );
}

async function Main({ id }: { id: string }) {
  const item = await new Promise<Item>((resolve, reject) => {
    setTimeout(() => {
      const item = items.find((item) => item.id === Number(id));

      if (!item) {
        reject(new Error("Item not found"));
      } else {
        resolve(item);
      }
    }, 1000);
  });

  return <A {...item} />;
}

// TODO: skeleton
function A({ name, description, thumbnail }: Item) {
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
