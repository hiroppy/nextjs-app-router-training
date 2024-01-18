import { Button } from "@/app/_components/button";
import { cookies } from "next/headers";
import { Box } from "../_components/box";
import { COOKIE_NAME } from "../constants";

export default function Page() {
  async function logOut() {
    "use server";

    cookies().delete(COOKIE_NAME);
  }

  return (
    <Box title="Dashboard">
      <form action={logOut}>
        <Button type="submit">logout</Button>
      </form>
      <p>you are logged in 😄</p>
    </Box>
  );
}
