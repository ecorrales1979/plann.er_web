import { tv } from 'tailwind-variants';

export const modalVariants = tv({
  base: 'rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5',
  variants: {
    size: {
      small: 'w-min',
      medium: 'w-[640px]',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});
