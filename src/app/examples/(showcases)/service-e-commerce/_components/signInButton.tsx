"use client";

import { Button } from "@/app/_components/button";
import { useFormStatus } from "react-dom";

export function SignInButton() {
  const { pending } = useFormStatus();

  if (pending) {
    return (
      <span className="block text-center text-gray-300">🏃🏻‍♂️ loading...</span>
    );
  }

  return (
    <Button type="submit" wFull>
      sign in
    </Button>
  );
}
