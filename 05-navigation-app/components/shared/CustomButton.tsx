import React from 'react';

import { View, Text, Pressable, PressableProps } from 'react-native'

interface CustomButtonProps extends PressableProps {
    children: string;
    color?: 'primary' | 'secondary' | 'tertiary';
    variant?: 'contained' | 'text-only';
    className?: string;
}

const CustomButton = React.forwardRef(
    ({ children, color = 'primary', onPress, onLongPress, variant = 'contained', className }: CustomButtonProps, ref: React.Ref<View>) => {
        const btnColor = {
            primary: 'bg-primary',
            secondary: 'bg-secondary',
            tertiary: 'bg-tertiary',
        }[color];

        const textColor = {
            primary: 'text-primary',
            secondary: 'text-secondary',
            tertiary: 'text-tertiary',
        }[color];

        if (variant === 'text-only') {
            return (
                <Pressable
                    onPress={onPress}
                    onLongPress={onLongPress}
                    className={`active:opacity-70 p-3 ${ className }`}
                    ref={ ref }
                >

                    <Text className={`text-center ${ textColor }`}>{ children }</Text>

                </Pressable>
            )
        }

        return (
            <Pressable
                onPress={onPress}
                onLongPress={onLongPress}
                className={`p-3 rounded-md active:opacity-70 ${btnColor} ${ className }`}
                ref={ ref }
            >

                <Text className='text-white text-center'>{children}</Text>

            </Pressable>
        )
    })

export default CustomButton