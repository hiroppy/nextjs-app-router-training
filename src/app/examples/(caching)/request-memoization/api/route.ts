import { performance } from "node:perf_hooks";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  // don't determine the response data when building to understand Request Memoization clarify
  revalidatePath("/examples/request-memoization");

  return NextResponse.json({
    now: performance.now(),
  });
}
