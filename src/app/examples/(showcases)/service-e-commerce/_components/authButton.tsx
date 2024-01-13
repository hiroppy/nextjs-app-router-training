"use client";

import { useRouter } from "next/navigation";
import { signIn, signOut } from "../_utils/auth";
import { Button } from "./button";

type Props = {
  type: "signIn" | "signOut";
  // intercepting router doesn't support push/replace
  // see https://github.com/vercel/next.js/issues/49662#issuecomment-1550170841
  isInterceptingRouter?: boolean;
};

export function AuthButton({ type, isInterceptingRouter }: Props) {
  const router = useRouter();

  const onClick = () => {
    if (type === "signIn") {
      signIn();
    } else {
      signOut();
    }

    if (isInterceptingRouter) {
      router.back();
    } else {
      router.replace("/examples/service-e-commerce");
    }

    // purge Layout(server component) to refresh cache
    router.refresh();
  };

  return (
    <Button onClick={onClick}>
      {type === "signIn" ? "sign in" : "sign out"}
    </Button>
  );
}
