import { type ComponentProps, type PropsWithChildren } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "rounded-lg font-medium flex justify-center items-center gap-2",
  variants: {
    color: {
      primary: "bg-lime-300 text-lime-950 hover:bg-lime-400",
      secondary: "bg-zinc-800 text-zinc-200 hover:bg-zinc-700",
    },
    size: {
      default: "px-5 py-2",
      full: "w-full h-11",
    },
  },
  defaultVariants: {
    color: "secondary",
    size: "default",
  },
});

type Props = PropsWithChildren<
  ComponentProps<"button"> & VariantProps<typeof buttonVariants>
>;

export function Button({ children, color, size, ...rest }: Props) {
  return (
    <button className={buttonVariants({ color, size })} {...rest}>
      {children}
    </button>
  );
}
