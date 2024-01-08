type Props = {
  params: {
    itemId: string;
  };
};

export default function Page({ params }: Props) {
  return (
    <div className="flex">
      <h2 className="text-lg font-semibold">{params.itemId}</h2>
    </div>
  );
}
