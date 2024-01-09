"use client";

import { useMemo } from "react";
import { debounce } from "./_utils/debounce";
import { like, save, saveAsDraft } from "./actions";

export default function Page() {
  const saveDraftDebounced = useMemo(() => debounce(saveAsDraft, 300), []);

  return (
    <div className="flex flex-col gap-4">
      <form action={save} className="flex flex-col gap-4">
        <textarea
          name="content"
          onChange={async (e) => {
            await saveDraftDebounced(e.target.value);
          }}
          className="bg-gray-600"
        />
        <button type="submit">Publish</button>
      </form>
      <button
        type="button"
        className="text-left text-2xl"
        onClick={() => like()}
      >
        👍
      </button>
    </div>
  );
}
