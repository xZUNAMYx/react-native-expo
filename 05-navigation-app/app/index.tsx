import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'

const App = () => {
  // return <Redirect href={'/(stack)/home'} />
  // return <Redirect href={'/tabs'} />
  return <Redirect href={'/home'} />

  // return (
  //   <SafeAreaView>
  //     <View className='mt-5 mx-2.5'>
  //       <Text className='text-3xl font-space-mono text-primary'>Hola mundo</Text>

  //       <Text className='text-3xl text-secondary-100'>Hola mundo</Text>

  //       <Text className='text-3xl text-secondary'>Hola mundo</Text>

  //       <Link href={'/products'}>
  //         <Text className='text-3xl text-primary'>Ir a productos</Text>
  //       </Link>
  //     </View>
  //   </SafeAreaView>
//   )
}

export default App