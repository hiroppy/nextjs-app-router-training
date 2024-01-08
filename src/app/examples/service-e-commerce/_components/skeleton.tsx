import { ImageBox, ImageList } from "./imageList";

type Props = {
  num: number;
};

export function ImageSkeletons({ num }: Props) {
  return (
    <ImageList>
      {[...new Array(num)].map((_, i) => (
        <ImageBox key={i}>
          <div className="bg-gray-600 animate-pulse h-full w-full rounded-md" />
        </ImageBox>
      ))}
    </ImageList>
  );
}
