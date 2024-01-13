"use server";

export type Message = {
  message: string;
};

export async function post(message: Message["message"]) {
  await new Promise((res) => setTimeout(res, 1000));

  return message;
}
