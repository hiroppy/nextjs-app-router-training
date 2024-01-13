import Link from "next/link";
import { type PropsWithChildren } from "react";
import { AuthButton } from "../_components/authButton";
import { PageWrapper } from "../_components/pageWrapper";
import { isSignIn } from "../_utils/auth";

type Props = PropsWithChildren<{
  cart: React.ReactNode;
  dialog: React.ReactNode;
}>;

export default async function Layout({ cart, dialog, children }: Props) {
  const signedIn = await isSignIn();

  return (
    <PageWrapper>
      <header className="w-full flex items-center justify-between py-1 px-2 bg-gray-700 h-10">
        <div
          className={[
            "w-5 h-5 rounded-full",
            signedIn ? ["bg-blue-300 "] : [],
          ].join(" ")}
        />
        {signedIn ? (
          <div className="w-fit">
            <AuthButton type="signOut" />
          </div>
        ) : (
          <Link
            href="/examples/service-e-commerce/sign-in"
            className="border border-gray-500 px-4 rounded-md hover:text-blue-300"
          >
            sign in
          </Link>
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
