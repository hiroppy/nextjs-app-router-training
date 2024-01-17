import { Boundary } from "@/app/_components/boundary";
import { getNow } from "../_utils/fetcher";

type Props = {
  label: string;
  qs?: string;
};

export async function Child({ label, qs }: Props) {
  const now = await getNow(qs);

  return <Boundary label={label}>{now}</Boundary>;
}
