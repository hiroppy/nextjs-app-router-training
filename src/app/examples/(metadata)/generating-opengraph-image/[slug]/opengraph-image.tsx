import { ImageResponse } from "next/og";

export const alt = "🤓";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Image({ params }: Props) {
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
      {alt} {params.slug}
    </div>,
  );
}
