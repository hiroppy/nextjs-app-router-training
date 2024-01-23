import { Button } from "@/app/_components/button";
import Link from "next/link";
import { type PropsWithChildren } from "react";
import { PageWrapper } from "../_components/pageWrapper";
import { isSignIn, signout } from "../actions";

type Props = PropsWithChildren<{
  cart: React.ReactNode;
  dialog: React.ReactNode;
}>;

export default async function Layout({ cart, dialog, children }: Props) {
  const signedIn = await isSignIn();

  return (
    <PageWrapper>
      <header className="w-full flex items-center justify-between py-1 px-2 bg-gray-700 h-10">
        {signedIn ? (
          <>
            <div className="flex items-center gap-2">
              <div
                className={[
                  "w-5 h-5 rounded-full",
                  signedIn ? ["bg-blue-300 "] : [],
                ].join(" ")}
              />
              <Link
                href="/examples/shopping/admin"
                className="text-sm hover:text-blue-300"
              >
                Admin
              </Link>
            </div>
            <div className="w-fit">
              <form action={signout}>
                <Button type="submit" size="sm">
                  sign out
                </Button>
              </form>
            </div>
          </>
        ) : (
          <>
            <div />
            <Link
              href="/examples/shopping/sign-in"
              className="text-sm border border-gray-500 py-1 px-4 rounded-md hover:text-blue-300"
            >
              sign in
            </Link>
          </>
        )}
      </header>
      <div className="py-4 px-2 flex flex-col gap-4">
        {cart}
        {children}
      </div>
      {dialog}
    </PageWrapper>
  );
}
