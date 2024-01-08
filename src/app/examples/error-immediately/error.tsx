"use client";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <span>message: {error.message}</span>
      <span>digest: {error.digest}</span>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
