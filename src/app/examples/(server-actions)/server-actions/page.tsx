"use client";

import { Boundary } from "@/app/_components/boundary";
import { useFormState, useFormStatus } from "react-dom";
import { create } from "./actions";

export default function Page() {
  const [state, formAction] = useFormState(create, null);

  return (
    <Boundary label="Page">
      <div className="flex flex-col gap-4">
        <form action={formAction} className="flex gap-4">
          <input type="text" name="message" className="bg-slate-600 flex-1" />
          <Submit />
        </form>
        {state?.message && <p>{state.message}</p>}
      </div>
    </Boundary>
  );
}

function Submit() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={pending ? "text-gray-500" : "text-gray-300"}
    >
      Submit
    </button>
  );
}
