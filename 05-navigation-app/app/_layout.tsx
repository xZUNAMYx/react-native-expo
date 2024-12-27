import React, { useEffect } from 'react';

import "./global.css";
import { Slot, SplashScreen, Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [ fontsLoaded, error ] = useFonts({
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if( error ) throw error;

    if( fontsLoaded ) {
      SplashScreen.hideAsync();
    }

  }, [ fontsLoaded, error ]);

  if( !fontsLoaded && !error ) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Slot />
    </GestureHandlerRootView>
  );
  // return (
  //   <Slot />
  // );
  // return (
  //   <Stack />
  // );
}

export default RootLayout