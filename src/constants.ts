export const BASE_URL = "https://nextjs-app-router-training.vercel.app";

// https://github.com/vercel/next.js/issues/44062#issuecomment-1544028776
// next.js doesn't support localhost in production mode/build
// When you use dynamic mode(e.g. headers, cookies) or dynamic = "force-dynamic",
// the build step will be green but some features like revalidatePath/Tag won't work
export const NOW_API_ENDPOINT = `${BASE_URL}/api/now`;

export type NowResponse = {
  now: number;
};
