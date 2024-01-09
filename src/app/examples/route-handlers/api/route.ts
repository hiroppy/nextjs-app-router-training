import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const cookieName = "example-route-handlers";

export async function GET(req: NextRequest, res: NextResponse) {
  const headersList = headers();
  const referer = headersList.get("referer");
  const cookieStore = cookies();
  const cookie = cookieStore.get(cookieName);
  const newCookie = cookie
    ? `${cookie.name}=${cookie.value}; Max-Age=2;`
    : `${cookieName}=referer:${referer}__${Date.now()}; Max-Age=2;`;

  return NextResponse.json(
    { msg: newCookie },
    {
      headers: {
        "Set-Cookie": newCookie,
      },
    },
  );
}
