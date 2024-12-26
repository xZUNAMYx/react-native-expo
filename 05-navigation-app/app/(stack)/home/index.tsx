import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/shared/CustomButton'

const HomeScreen = () => {
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

        {/* <Link className='mb-5' href={'/products'}>Products</Link>
        <Link className='mb-5' href={'/profile'}>Profile</Link>
        <Link className='mb-5' href={'/settings'}>Settings</Link> */}

      </View>
    </SafeAreaView>
  )
}

export default HomeScreen