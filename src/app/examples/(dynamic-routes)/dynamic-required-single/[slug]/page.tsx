type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  return <span>slug: {params.slug}</span>;
}
