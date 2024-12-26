import { useEffect } from 'react';

import "./global.css";
import { Slot, SplashScreen, Stack } from 'expo-router';
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
    <Slot />
  );
  // return (
  //   <Stack />
  // );
}

export default RootLayout