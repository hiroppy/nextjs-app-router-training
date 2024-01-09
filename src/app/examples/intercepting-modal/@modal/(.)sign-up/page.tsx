"use client";

import { SignUp } from "@/app/examples/intercepting-modal/_components/signUp";
import { Modal } from "../_components/modal";

export default function Page() {
  return (
    <Modal>
      <SignUp />
      <div className="mt-6 flex items-center justify-center flex-col gap-4">
        <p className="text-gray-300 text-sm text-center">
          👍 modal is kept when backwards or forwards navigation
        </p>
        <button
          type="button"
          onClick={() => {
            window.location.reload();
          }}
        >
          Reload
        </button>
      </div>
    </Modal>
  );
}
