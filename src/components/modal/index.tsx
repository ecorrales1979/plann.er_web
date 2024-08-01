import { X } from 'lucide-react';
import { PropsWithChildren, ReactNode } from 'react';
import { VariantProps } from 'tailwind-variants';
import { modalVariants } from './modal-definitions';

type Props = PropsWithChildren<
  VariantProps<typeof modalVariants> & {
    title?: string;
    subtitle?: ReactNode;
    onClose: () => void;
  }
>;

export function Modal({ children, onClose, size, subtitle, title }: Props) {
  return (
    <div className="fixed bg-black/60 inset-0 flex items-center justify-center">
      <div role="dialog" className={modalVariants({ size })}>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            {!!title && <h2 className="text-lg font-semibold">{title}</h2>}
            <button type="button" onClick={onClose} className="ml-auto">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>

          {!!subtitle && <p className="text-sm text-zinc-400">{subtitle}</p>}
        </div>

        {children}
      </div>
    </div>
  );
}
