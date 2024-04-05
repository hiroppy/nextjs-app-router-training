import Link from "next/link";
import type { PropsWithChildren } from "react";

export function ImageList({ children }: PropsWithChildren) {
  return <div className="flex gap-5">{children}</div>;
}

export function ImageBox({ children }: PropsWithChildren) {
  return (
    <div className="w-24 h-24 rounded-md flex items-center justify-center">
      {children}
    </div>
  );
}

export function ImageItem({
  id,
  thumbnail,
}: {
  id: number;
  thumbnail: string;
}) {
  return (
    <Link href={`/examples/shopping/foods/${id}`}>
      <ImageBox>
        <div className="w-full h-full flex items-center justify-center bg-gray-600 rounded-md">
          <span className="text-3xl">{thumbnail}</span>
        </div>
      </ImageBox>
    </Link>
  );
}
