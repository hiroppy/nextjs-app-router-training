import type { NowResponse } from "@/constants";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  const { now }: NowResponse = await (
    await fetch(`${process.env.NEXT_PUBLIC_EXTERNAL_URL}/api/now`, {
      next: {
        revalidate: 3,
      },
    })
  ).json();

  return NextResponse.json({ msg: now });
}
