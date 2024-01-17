"use client";

import { Boundary } from "@/app/_components/boundary";
import { EnvList } from "./envList";

export function Client() {
  return (
    <Boundary label="Client">
      <EnvList />
    </Boundary>
  );
}
