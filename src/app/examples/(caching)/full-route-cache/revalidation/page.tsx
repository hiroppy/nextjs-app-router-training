// [!code word:revalidate]
import { Boundary } from "@/app/_components/boundary";

// 5s
export const revalidate = 5;

export default function Page() {
  return <Boundary label="Page">{Date.now()}</Boundary>;
}
