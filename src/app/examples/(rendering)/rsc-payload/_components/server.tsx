import { Boundary } from "@/app/_components/boundary";

export function Server() {
  return <Boundary label="Server">{Date.now()}</Boundary>;
}
