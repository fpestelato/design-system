import { ReactNode } from 'react';
import { Slot } from "@radix-ui/react-slot";
import { clsx } from 'clsx';

export interface ButtonProps {
    children: ReactNode;
    asChild?: boolean;
}

export function Button({ asChild, children }: ButtonProps) {
    const Component = asChild ? Slot : 'button';

    return (
        <Component className={clsx(
            'py-3 px-4 rounded bg-cyan-500 font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
        )}>
            {children}
        </Component>
    )
}