import { ComponentProps } from 'react';

type Props = ComponentProps<'input'>;

export function Input({ ...props }: Props) {
  return (
    <input
      {...props}
      className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
    />
  );
}
