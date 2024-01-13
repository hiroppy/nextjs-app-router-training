// issue: https://github.com/sanity-io/template-nextjs-personal-website/issues/112

import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag") ?? "";

  revalidateTag(tag);

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
  });
}
