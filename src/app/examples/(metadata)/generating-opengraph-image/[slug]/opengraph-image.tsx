import { ImageResponse } from "next/og";

export const alt = "🤓";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Image({ params }: Props) {
  const { slug } = await params;

  return new ImageResponse(
    <div
      style={{
        fontSize: 240,
        background: "#e5e7eb",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {alt} {slug}
    </div>,
  );
}
