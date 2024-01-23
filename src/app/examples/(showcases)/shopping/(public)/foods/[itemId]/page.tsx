import { notFound } from "next/navigation";
import { getItem } from "../../../_utils/items";

type Props = {
  params: {
    itemId: string;
  };
};

export default async function Page({ params }: Props) {
  const item = await getItem(params.itemId);

  if (item === undefined) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <span className="text-5xl text-center">{item.thumbnail}</span>
      <h2 className="text-2xl">{item.name}</h2>
      <p>{item.description}</p>
    </div>
  );
}
