import { Suspense } from "react";
import { ImageItem, ImageList } from "../../_components/imageList";
import { Section } from "../../_components/section";
import { ImageSkeletons } from "../../_components/skeleton";
import { isSignIn } from "../../actions";
import { items } from "../../mock";

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
    setTimeout(() => resolve(items.filter(({ id }) => id === 1)), 2000);
  });

  return (
    <ImageList>
      {allItems.map(({ id, thumbnail }) => (
        <ImageItem id={id} thumbnail={thumbnail} key={id} />
      ))}
    </ImageList>
  );
}
