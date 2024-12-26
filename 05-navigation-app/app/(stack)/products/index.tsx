import React from 'react';

import { View, Text, FlatList } from 'react-native';

import { products } from '@/store/products.store';
import { Link } from 'expo-router';

const ProductsScreen = () => {
  return (
    <View className='flex flex-1'>
      <FlatList 
        data={ products }
        keyExtractor={ item => item.id }
        renderItem={ ({ item }) => (
          <View className='mt-10'>
            <Text className='text-2xl'>{ item.title }</Text>
            <Text className=''>{ item.description }</Text>

            <View className='flex flex-row justify-between mt-5'>
              <Text className=''>{ item.price }</Text>
              <Link href={`/(stack)/products/${ item.id }`} className='text-primary'>
                Ver detalles
              </Link>
            </View>
          </View>
        ) }
      />
    </View>
  )
}

export default ProductsScreen