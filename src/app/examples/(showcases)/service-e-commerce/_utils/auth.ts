export const signInKey = "service-e-commerce-sign-in";
export const path = "/examples/service-e-commerce";

export async function isSignIn() {
  const { cookies } = await import("next/headers");
  const cookiesList = cookies();
  const signInCookie = cookiesList.get(signInKey);

  return signInCookie?.value === "true";
}

export function signIn() {
  document.cookie = `${signInKey}=true; path=${path};`;
}

export function signOut() {
  document.cookie = `${signInKey}=; path=${path}; Max-Age=0;`;
}
