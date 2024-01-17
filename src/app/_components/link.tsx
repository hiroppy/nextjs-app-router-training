import NextLink, { type LinkProps } from "next/link";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<LinkProps>;

export function Link({ children, ...rest }: Props) {
  return (
    <NextLink
      {...rest}
      className="text-gray-300 font-medium border-b border-b-gray-500 pb-0.5 w-fit hover:border-b-blue-300"
    >
      {children}
    </NextLink>
  );
}
