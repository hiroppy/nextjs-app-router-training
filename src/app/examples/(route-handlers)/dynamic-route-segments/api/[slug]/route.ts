import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  return NextResponse.json({ msg: params.slug });
}
