import { Boundary } from "@/app/_components/boundary";
import { notFound } from "next/navigation";
import { getItem, isSignIn } from "../_utils/api";

export async function Basic() {
  const signedIn = await isSignIn();

  if (!signedIn) {
    return notFound();
  }

  await getItem(2);

  return (
    <Boundary label="Basic" filePath="_components/basic.tsx">
      <span>loaded!</span>
    </Boundary>
  );
}
