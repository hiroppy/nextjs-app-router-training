import { performance } from "node:perf_hooks";
import { Boundary } from "@/app/_components/boundary";

export function Static() {
  return <Boundary label="Static">{performance.now()}</Boundary>;
}
