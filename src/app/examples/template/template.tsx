import { type PropsWithChildren } from "react";
import { Box } from "./_components/box";
import { Form } from "./_components/form";

export default function Template({ children }: PropsWithChildren) {
  return (
    <Box title="Template">
      <Form />
      {children}
    </Box>
  );
}
