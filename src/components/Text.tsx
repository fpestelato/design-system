import { ReactNode } from 'react';
import { Slot } from "@radix-ui/react-slot";
import { clsx } from 'clsx';

export interface TextProps {
    children: ReactNode;
    size?: 'sm' | 'md' | 'lg';
    asChild?: boolean;
}

export function Text({ size = 'md', asChild, children }: TextProps) {
    const Component = asChild ? Slot : 'span';

    return (
        <Component className={clsx(
            'text-gray-100 font-sans',
            {
                'text-xs': size === 'sm',
                'text-sm': size === 'md',
                'text-md': size === 'lg',
            }
        )}>
            {children}
        </Component>
    )
}