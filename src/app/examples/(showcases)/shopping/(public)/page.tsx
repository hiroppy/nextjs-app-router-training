import { Suspense } from "react";
import { ImageItem, ImageList } from "../_components/imageList";
import { Section } from "../_components/section";
import { ImageSkeletons } from "../_components/skeleton";
import { getItems } from "../_utils/items";

export default async function Page() {
  return (
    <Section title="All Foods">
      <Suspense fallback={<ImageSkeletons num={3} />}>
        <Items />
      </Suspense>
    </Section>
  );
}

async function Items() {
  const items = await getItems();

  return (
    <ImageList>
      {items.map(({ id, thumbnail }) => (
        <ImageItem id={id} thumbnail={thumbnail} key={id} />
      ))}
    </ImageList>
  );
}
