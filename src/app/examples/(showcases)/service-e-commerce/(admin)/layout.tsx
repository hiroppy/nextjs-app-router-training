import { notFound } from "next/navigation";
import { type PropsWithChildren } from "react";
import { PageWrapper } from "../_components/pageWrapper";
import { isSignIn } from "../_utils/auth";

export default async function layout({ children }: PropsWithChildren) {
  const signedIn = await isSignIn();

  if (!signedIn) {
    return notFound();
  }

  return (
    <PageWrapper>
      <div className="bg-orange-800">
        <h2 className="text-lg text-center">Admin</h2>
      </div>
      <div className="py-4 px-2">{children}</div>
    </PageWrapper>
  );
}
