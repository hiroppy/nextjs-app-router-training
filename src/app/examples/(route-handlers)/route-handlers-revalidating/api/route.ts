// if you add POST function in this file, GET won't save the own cache
export async function GET() {
  return Response.json({
    now: Date.now(),
  });
}

// export async function POST() {
//   return Response.json({
//     now: Date.now(),
//   });
// }
