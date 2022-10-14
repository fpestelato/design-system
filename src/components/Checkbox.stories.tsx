import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './Checkbox';
import { Text } from "./Text";

export default {
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {
        children: 'Create account',
    },
    decorators: [
        (Story) => {
            return (
                <div className="flex items-center gap-2">
                    {Story()}
                    <Text size="sm">Lembrar usuário e senha</Text>
                </div>
            )
        }
    ]
} as Meta;

export const Default: StoryObj<CheckboxProps> = {
    argTypes: {
        asChild: {
            table: {
                disable: true
            }
        }
    }
}