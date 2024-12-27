import React from 'react'
import { Stack, useNavigation } from 'expo-router'
import { DrawerActions, StackActions } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const StackLayout = () => {
    const navigation = useNavigation();

    const onHeaderLeftClick = (canGoBack: boolean) => {
        if (canGoBack) {
            navigation.dispatch( StackActions.pop() );
            return;
        }

        navigation.dispatch( DrawerActions.toggleDrawer ); 
    }

    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                contentStyle: {
                    backgroundColor: 'white',
                },
                headerLeft: ({ tintColor, canGoBack }) => (
                    <Ionicons 
                        name={ canGoBack ? 'chevron-back' : 'menu' }
                        className='mr-5'
                        size={ 20 }
                        onPress={ () => onHeaderLeftClick(canGoBack) }
                        // onPressIn={ onHeaderLeftClick }
                    />
                   
                ),
            }}
        >
            <Stack.Screen
                name='home/index'
                options={{
                    title: 'Home Sreen',
                }}
            />
            <Stack.Screen
                name='products/index'
                options={{
                    title: 'Products Sreen',
                }}
            />
            <Stack.Screen
                name='profile/index'
                options={{
                    title: 'Profile Sreen',
                }}
            />
            <Stack.Screen
                name='settings/index'
                options={{
                    title: 'Settings Sreen',
                }}
            />
        </Stack>
    )
}

export default StackLayout