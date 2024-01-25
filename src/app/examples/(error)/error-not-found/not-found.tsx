import { Boundary } from "@/app/_components/boundary";

export default function notFound() {
  return (
    <Boundary label="not-found">
      <h2 className="text-2xl">Page not found 🥲</h2>
    </Boundary>
  );
}
