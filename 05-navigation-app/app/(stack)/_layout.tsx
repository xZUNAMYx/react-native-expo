import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack
        screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
                backgroundColor: 'white',
            },
        }}
    >
        <Stack.Screen 
            name = 'home/index'
            options={{
                title: 'Home Sreen',
            }}
        />
        <Stack.Screen 
            name = 'products/index'
            options={{
                title: 'Products Sreen',
            }}
        />
        <Stack.Screen 
            name = 'profile/index'
            options={{
                title: 'Profile Sreen',
            }}
        />
        <Stack.Screen 
            name = 'settings/index'
            options={{
                title: 'Settings Sreen',
            }}
        />
    </Stack>
  )
}

export default StackLayout