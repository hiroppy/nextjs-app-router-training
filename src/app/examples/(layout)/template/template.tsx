import { Boundary } from "@/app/_components/boundary";
import { type PropsWithChildren } from "react";
import { Form } from "./_components/form";

export default function Template({ children }: PropsWithChildren) {
  return (
    <Boundary label="Root Template" filePath="template.tsx">
      <Form />
      {children}
    </Boundary>
  );
}
