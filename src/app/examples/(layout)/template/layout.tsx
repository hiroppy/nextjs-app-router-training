import { Boundary } from "@/app/_components/boundary";
import { type PropsWithChildren } from "react";
import { Form } from "./_components/form";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Boundary label="Root Layout" filePath="layout.tsx">
      <p className="text-gray-400">
        Please input messages and then go to the child page, Input of layout
        will keep the value, which means not re-rendering even if changing
        pages.
      </p>
      <Form />
      {children}
    </Boundary>
  );
}
