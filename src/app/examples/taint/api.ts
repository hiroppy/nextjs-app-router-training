import {
  experimental_taintObjectReference,
  experimental_taintUniqueValue,
} from "react";

const user = { id: "my-id", name: "hiroppy", password: "xxxxx" };

export type User = typeof user;

export async function getMyProfileWithTaintObjectReference() {
  experimental_taintObjectReference(
    "Do not pass the whole user object to the client",
    user,
  );

  return user;
}

export async function getMyProfileWithTaintUniqueValue() {
  experimental_taintUniqueValue(
    "Do not pass the whole user object to the client",
    user,
    user.password,
  );

  return user;
}
