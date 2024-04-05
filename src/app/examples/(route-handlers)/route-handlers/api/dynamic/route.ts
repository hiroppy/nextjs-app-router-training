import { cookies, headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

const COOKIE_NAME = "example-route-handlers";

// when use headers or cookies or searchParams, this response will be dynamic
export async function GET(req: NextRequest, res: NextResponse) {
  const referer = headers().get("referer");
  const cookie = cookies().get(COOKIE_NAME);

  req.nextUrl.searchParams;

  return NextResponse.json({ msg: Date.now() });
}
