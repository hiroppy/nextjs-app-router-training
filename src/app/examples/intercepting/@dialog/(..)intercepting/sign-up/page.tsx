"use client";

import { SignUp } from "@/app/examples/intercepting/_components/signUp";

export default function Page() {
  return (
    <dialog
      open
      className="w-1/2 bg-gray-700 text-gray-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="p-6 flex flex-col items-center gap-4">
        <SignUp />
        <div className="flex flex-col gap-6 items-center">
          <p className="text-sm text-gray-300">
            "@dialog/(..)intercepting/sign-up/page.tsx" has been intercepting
            "items/intercepting/sign-up"
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="border border-gray-500 py-1 px-4 rounded-md w-fit"
          >
            Let's reload this page
          </button>
        </div>
      </div>
    </dialog>
  );
}
