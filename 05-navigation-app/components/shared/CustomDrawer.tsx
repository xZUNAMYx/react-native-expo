import { View, Text } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView
        { ...props }
    >
        <View className='flex justify-center items-center mx-3 p-10 mb-10 h-[150px] bg-primary rounded-xl'>
            <View className='flex justify-center items-center bg-white rounded-full h-24 w-24'> 

                <Text className='font-bold text-primary'>AA</Text>

            </View>
        </View>

        <DrawerItemList { ...props } />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer