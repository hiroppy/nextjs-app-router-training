import { Suspense } from "react";
import { Section } from "../../_components/section";
import { ImageSkeletons } from "../../_components/skeleton";
import { ImageList, ImageItem } from "../../_components/imageList";
import { items } from "../../mock";
import { isSignIn } from "../../_utils/auth";

export default async function Page() {
  const signedIn = await isSignIn();

  if (!signedIn) {
    return null;
  }

  return (
    <Section title="Your Cart">
      <Suspense fallback={<ImageSkeletons num={3} />}>
        <Items />
      </Suspense>
    </Section>
  );
}

async function Items() {
  // e.g. fetch
  const allItems = await new Promise<(typeof items)[number][]>((resolve) => {
    setTimeout(() => resolve(items.filter(({ id }) => id === 1)), 3000);
  });

  return (
    <ImageList>
      {allItems.map(({ id, thumbnail }) => (
        <ImageItem id={id} thumbnail={thumbnail} key={id} />
      ))}
    </ImageList>
  );
}
