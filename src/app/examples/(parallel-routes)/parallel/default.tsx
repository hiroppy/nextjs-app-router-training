import { Boundary } from "@/app/_components/boundary";

export default function Default() {
  return (
    <Boundary label="Root Default" filePath="default.tsx">
      <p>
        root and @left don't have "only-right" dir so they will fallback to the
        default.tsx
      </p>
    </Boundary>
  );
}
