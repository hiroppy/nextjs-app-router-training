"use client";

import { useFormState, useFormStatus } from "react-dom";
import { create } from "./actions";

export default function Page() {
  const [state, formAction] = useFormState(create, null);

  return (
    <div className="flex flex-col gap-4">
      <form action={formAction} className="flex flex-col gap-4">
        <input type="text" name="name" className="bg-slate-600" />
        <Submit />
      </form>
      {state?.message && <p>{state?.message}</p>}
    </div>
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
