import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  revalidatePath("/examples/router-handlers-revalidate/revalidatePath");

  return NextResponse.json({
    msg: Date.now(),
  });
}
