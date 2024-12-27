import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: 'blue',
      // headerShown: false,
      // tabBarStyle: {
      //   backgroundColor: 'black'
      // }
    }}>
      <Tabs.Screen
        name="(stack)"
        options={{
          headerShown: false,
          title: 'Stack',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="pagelines" color={color} />,
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home Screen',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: 'Favorites Screen',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabsLayout