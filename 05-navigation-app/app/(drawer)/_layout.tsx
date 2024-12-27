import { View, Text } from 'react-native'
import React from 'react'
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawer from '@/components/shared/CustomDrawer';

const DrawerLayout = () => {
  return (
    <Drawer
        drawerContent={ CustomDrawer }
        screenOptions={{
          // headerShown: false,
            drawerActiveTintColor: 'green',
            headerShadowVisible: false,

            // sceneContainerStyle: {
            //     backgroundColor: 'white'
            // },
        }}
    >
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            headerShown: false,
            drawerLabel: 'Tabs + Stack',
            title: 'Tacbs + Stack',
            drawerIcon: ({ color, size }) => <Ionicons name="person" size={ size } color={ color } />,
          }}
        />
        <Drawer.Screen
          name="user/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'Usuario',
            drawerIcon: ({ color, size }) => <Ionicons name="person" size={ size } color={ color } />,
          }}
        />
        <Drawer.Screen
          name="schedule/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Schedule',
            title: 'Horario',
            drawerIcon: ({ color, size }) => <Ionicons name="school-outline" size={ size } color={ color } />,
          }}
        />
    </Drawer>
  )
}

export default DrawerLayout