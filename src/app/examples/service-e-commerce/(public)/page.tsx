import Link from "next/link";
import { Suspense } from "react";
import { ImageItem, ImageList } from "../_components/imageList";
import { Section } from "../_components/section";
import { ImageSkeletons } from "../_components/skeleton";
import { isSignIn } from "../_utils/auth";
import { items } from "../mock";

export default async function Page() {
  const signedIn = await isSignIn();

  return (
    <>
      <Section title="All Foods">
        <Suspense fallback={<ImageSkeletons num={3} />}>
          <Items />
        </Suspense>
      </Section>
      {signedIn && (
        <Link
          href="/examples/service-e-commerce/admin"
          className="text-gray-300"
        >
          Admin
        </Link>
      )}
    </>
  );
}

async function Items() {
  // e.g. fetch
  const allItems = await new Promise<typeof items>((resolve) => {
    setTimeout(() => resolve(items), 2000);
  });

  return (
    <ImageList>
      {allItems.map(({ id, thumbnail }) => (
        <ImageItem id={id} thumbnail={thumbnail} key={id} />
      ))}
    </ImageList>
  );
}
