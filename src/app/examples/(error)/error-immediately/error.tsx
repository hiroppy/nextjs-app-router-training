"use client";

import { Boundary } from "@/app/_components/boundary";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorComponent({ error, reset }: Props) {
  return (
    <Boundary label="Error">
      <div className="flex flex-col gap-2">
        <span>message: {error.message}</span>
        <span>digest: {error.digest}</span>
        <button type="button" onClick={() => reset()}>
          Try again
        </button>
      </div>
    </Boundary>
  );
}
