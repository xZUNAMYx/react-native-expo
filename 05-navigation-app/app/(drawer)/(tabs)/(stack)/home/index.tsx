import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router, useNavigation } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'
import { DrawerActions } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch( DrawerActions.toggleDrawer );
  }

  return (
    <SafeAreaView>
      <View className='px-5 mt-5'>

        <CustomButton color='primary' className='mb-2' onPress={ () => router.push('/products') }>
          Products 
        </CustomButton>

        <CustomButton color='secondary' className='mb-2' onPress={ () => router.push('/profile') }>
          Profile 
        </CustomButton>
        
        <CustomButton color='tertiary' className='mb-2' onPress={ () => router.push('/settings') }>
          Ajustes
        </CustomButton>

        <Link href={'/products'} asChild>
          <CustomButton color='primary' variant='text-only' className='mb-5' onPress={ () => router.push('/products') }>
            Products 
          </CustomButton>
        </Link>

        <CustomButton onPress={ onToggleDrawer }>
          Abrir Menú
        </CustomButton>

        {/* <Link className='mb-5' href={'/products'}>Products</Link>
        <Link className='mb-5' href={'/profile'}>Profile</Link>
        <Link className='mb-5' href={'/settings'}>Settings</Link> */}

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen