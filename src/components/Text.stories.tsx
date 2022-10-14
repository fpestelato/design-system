import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Lorem ipsum.',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: {
                type: 'inline-radio'
            }
        },
    }
} as Meta;

export const Default: StoryObj<TextProps> = {
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'sm'
    },
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
}

export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    },
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        size: 'lg',
        asChild: true,
        children: <p>Text with paragraph tag</p>
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
}