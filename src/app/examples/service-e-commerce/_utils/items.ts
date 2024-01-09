import { type Item, items } from "../mock";

export async function getItems() {
  // e.g. fetch
  const allItems = await new Promise<Item[]>((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 1000);
  });

  return allItems;
}

export async function getItem(id: string) {
  const item = await new Promise<Item | undefined>((resolve) => {
    setTimeout(() => {
      const item = items.find((item) => item.id === Number(id));

      resolve(item);
    }, 1000);
  });

  return item;
}
