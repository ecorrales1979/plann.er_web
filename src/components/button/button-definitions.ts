import { tv } from 'tailwind-variants';

export const buttonVariants = tv({
  base: 'rounded-lg font-medium flex justify-center items-center gap-2',
  variants: {
    color: {
      primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
      secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
    },
    size: {
      default: 'px-5 py-2',
      full: 'w-full h-11',
    },
  },
  defaultVariants: {
    color: 'secondary',
    size: 'default',
  },
});
