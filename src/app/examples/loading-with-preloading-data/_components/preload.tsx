import { notFound } from "next/navigation";
import { getItem, isSignIn } from "../_utils/api";

const preload = (id: number) => {
  // void evaluates the given expression and returns undefined
  // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/void
  void getItem(id);
};

async function Item({ id }: { id: number }) {
  await getItem(id);

  return <span>loaded!</span>;
}

export async function Preload() {
  preload(1);

  const signedIn = await isSignIn();

  if (!signedIn) {
    return notFound();
  }

  return <Item id={1} />;
}
