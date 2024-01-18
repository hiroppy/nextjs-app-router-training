import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export function Button({ children, ...rest }: Props) {
  return (
    <button
      type="button"
      className="border border-gray-500 rounded-md py-1 px-4 hover:text-blue-300 hover:border-blue-300"
      {...rest}
    >
      {children}
    </button>
  );
}
