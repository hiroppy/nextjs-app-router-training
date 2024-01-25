import { Boundary } from "@/app/_components/boundary";

export default function Page() {
  return (
    <Boundary label="Child Page" filePath="child/page.tsx">
      child page has the root layout
    </Boundary>
  );
}
