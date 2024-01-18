// Now, any Client Component that imports getData() will receive a build-time error explaining
// that this module can only be used on the server.
import "server-only";

export async function getData() {
  const res = await fetch("https://external-service.com/data", {
    headers: {
      authorization: process.env.API_KEY || "",
    },
  });

  return res.json();
}
