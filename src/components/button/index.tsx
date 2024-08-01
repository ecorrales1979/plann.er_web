import { type ComponentProps, type PropsWithChildren } from 'react';
import { type VariantProps } from 'tailwind-variants';

import { buttonVariants } from './button-definitions';

type Props = PropsWithChildren<
  ComponentProps<'button'> & VariantProps<typeof buttonVariants>
>;

export function Button({ children, color, size, ...rest }: Props) {
  return (
    <button className={buttonVariants({ color, size })} {...rest}>
      {children}
    </button>
  );
}
