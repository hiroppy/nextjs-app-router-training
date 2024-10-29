import { type NextRequest, NextResponse } from "next/server";

type Props = {
  params: Promise<{
    slug: string;
  }>
}

export async function GET(
  req: NextRequest,
  { params }: Props,
) {
  const { slug } = await params;

  return NextResponse.json({ msg: slug });
}
