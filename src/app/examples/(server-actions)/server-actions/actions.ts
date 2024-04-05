// [!code word:use server]
"use server";

import { schema } from "./schema";

const initialState = {
  message: "",
};

export async function create(
  prevState: typeof initialState | null,
  formData: FormData,
) {
  const name = formData.get("message");
  const validatedFields = schema.safeParse({ name });

  if (!validatedFields.success) {
    return {
      message: `error: ${validatedFields.error.flatten().fieldErrors.name}`,
    };
  }

  // e.g. insert to DB
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    message: `success: ${formData.get("message")}`,
  };
}
