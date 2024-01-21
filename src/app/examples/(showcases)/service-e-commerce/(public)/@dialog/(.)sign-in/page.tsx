"use client";

import { Button } from "@/app/_components/button";
import { SignInButton } from "../../../_components/signInButton";
import { signIn } from "../../../actions";
import { Dialog } from "../_components/dialog";

export default function Page() {
  return (
    <Dialog>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col gap-5 w-full">
          <form action={signIn}>
            <SignInButton />
          </form>
          <Button
            onClick={() => {
              window.location.reload();
            }}
          >
            Go to sign-in page
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
