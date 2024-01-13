import { NextResponse } from "next/server";

// if you add POST function in this file, GET won't save the own cache
export async function GET() {
  // if you execute below, GET will purge the cache automatically
  // const tag = request.nextUrl.searchParams.get("tag") ?? "/";

  return NextResponse.json({
    now: Date.now(),
  });
}

// export async function POST() {
//   return Response.json({
//     now: Date.now(),
//   });
// }
