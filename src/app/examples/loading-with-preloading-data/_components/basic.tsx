import { notFound } from "next/navigation";
import { getItem, isSignIn } from "../_utils/api";

export async function Basic() {
  const signedIn = await isSignIn();

  if (!signedIn) {
    return notFound();
  }

  await getItem(2);

  return <span>loaded!</span>;
}
