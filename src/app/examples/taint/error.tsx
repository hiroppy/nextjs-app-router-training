"use client";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorComponent({ error }: Props) {
  return <span>{error.message}</span>;
}
