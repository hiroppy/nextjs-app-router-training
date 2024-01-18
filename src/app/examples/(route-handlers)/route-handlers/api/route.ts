import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME } from "../constants";

export async function GET(req: NextRequest, res: NextResponse) {
  const referer = headers().get("referer");
  const cookie = cookies().get(COOKIE_NAME);
  const newCookie = cookie
    ? `${cookie.name}=${cookie.value}; Max-Age=2;`
    : `${COOKIE_NAME}=referer:${referer}__${Date.now()}; Max-Age=2;`;

  return NextResponse.json(
    { msg: newCookie },
    {
      headers: {
        "Set-Cookie": newCookie,
      },
    },
  );
}
