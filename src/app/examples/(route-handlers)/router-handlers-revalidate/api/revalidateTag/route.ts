import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidateTag("dog");

  return NextResponse.json({
    msg: Date.now(),
  });
}
