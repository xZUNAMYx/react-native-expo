import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

interface FABProps {
    label: string,

    position?: 'bottom-right' | 'bottom-left' | 'bottom-center',

    // Methods or Actions
    onPress?: () => void,
}

export default function FAB({ label, onPress, position = 'bottom-right' }: FABProps) {
    return (
        <Pressable
            style={({ pressed }) => [ 
                styles.floatingButton, 
                position === 'bottom-right' ? styles.positionRight : styles.positionLeft, 
                position === 'bottom-center' ? styles.positionCenter : null,
                pressed ? { opacity: 0.5 } : { opacity: 1 }
            ]}
            onPress={ onPress }
        >
            <Text style={{ color: 'white', fontSize: 20 }}>{ label }</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        elevation: 3,
        shadowRadius: 4,
    },

    positionRight: {
        right: 20,
    },

    positionLeft: {
        left: 20,
    },

    positionCenter: {
        left: '50%',
        transform: [{ translateX: -50 }],
    },
})