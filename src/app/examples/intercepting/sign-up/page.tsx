import { SignUp } from "../_components/signUp";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <SignUp />
      <p>
        When you access this path directly, this page won't be intercepted by
        "@dialog/(..)intercepting/sign-up/page.tsx".
      </p>
    </div>
  );
}
