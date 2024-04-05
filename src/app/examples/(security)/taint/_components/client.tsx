"use client";

import type { User } from "../api";

type Props = Partial<User>;

export function Client({ id, name, password }: Props) {
  return (
    <div className="flex flex-col gap-2 text-gray-300">
      <p>id: {id}</p>
      <p>name: {name}</p>
      <p>password: {password}</p>
    </div>
  );
}
