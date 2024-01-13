import { revalidatePath } from "next/cache";

export async function GET() {
  revalidatePath("/examples/route-handlers-revalidating/revalidate-path");

  return Response.json({
    revalidated: true,
    now: Date.now(),
  });
}
