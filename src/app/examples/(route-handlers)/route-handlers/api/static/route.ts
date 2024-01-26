import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ msg: Date.now() });
}
