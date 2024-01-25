import { Boundary } from "@/app/_components/boundary";
import { Button } from "@/app/_components/button";
import { cookies } from "next/headers";
import { Box } from "../_components/box";
import { COOKIE_NAME } from "../constants";

export default function Page() {
  async function login() {
    "use server";

    cookies().set(COOKIE_NAME, "true");
  }

  return (
    <Boundary label="@login" bg="red" filePath="@login/page.tsx">
      <Box title="Login">
        <form action={login}>
          <Button type="submit">login</Button>
        </form>
        <p>Please log in!</p>
      </Box>
    </Boundary>
  );
}
