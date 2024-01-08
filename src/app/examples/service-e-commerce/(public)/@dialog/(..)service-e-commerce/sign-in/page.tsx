"use client";

import { AuthButton } from "../../../../_components/authButton";
import { Button } from "../../../../_components/button";
import { Dialog } from "../../_components/dialog";

export default function Page() {
  return (
    <Dialog>
      <div className="flex flex-col items-center justify-center h-full">
        <div className="flex flex-col gap-5 w-full">
          <AuthButton type="signIn" isInterceptingRouter />
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
