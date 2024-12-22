import React from 'react';

import { Text, Pressable } from 'react-native';

import { globalStyles } from '@/styles/global-styles';
import { Colors } from '@/constants/Colors';

import * as Haptics from 'expo-haptics';

interface CalculatorButtonProps {
    label: string;
    color?: string;
    blackText?: boolean;
    doubleSize?: boolean;
    onPress: () => void;
}

const CalculatorButton = ({
    label,
    color = Colors.darkGray,
    onPress,
    blackText = false,
    doubleSize = false }: CalculatorButtonProps) => {

    return (
        <Pressable
            style={({ pressed }) => ({
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.5 : 1,
                width: doubleSize ? 170 : 80,
            })}
            onPress={ () => {
                // TODO: Add haptic feedback verificar que vibre
                Haptics.selectionAsync();
                onPress();
            }}
        >
            <Text style={{
                ...globalStyles.buttonText,
                color: blackText ? 'black' : 'white',
            }}>
                {label}
            </Text>
        </Pressable>
    )
}

export default CalculatorButton