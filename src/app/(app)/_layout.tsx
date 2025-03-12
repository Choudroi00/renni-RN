import { View, Text } from 'react-native'
import { Redirect, SplashScreen, Tabs } from 'expo-router';

import React, { useCallback, useEffect } from 'react';
import { useAuth, useIsFirstTime } from '@/lib';
import XBottomTabs from '@/components/app/tabs-navigator';

const MainLayout = () => {

  const status = useAuth.use.status();

  const [isFirstTime] = useIsFirstTime();

  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {

    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);



  if (isFirstTime) {
    return <Redirect href="/(onboarding)" />;
  }

  // if (status === 'signOut') {
  //   return <Redirect href="/get-started" />;
  // }


  return (
    <Tabs
      
      screenOptions={{headerShown: false}}
      tabBar={XBottomTabs} >

    </Tabs>
  )
}

export default MainLayout