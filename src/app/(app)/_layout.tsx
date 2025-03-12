import { View, Text } from 'react-native'
import { Redirect, SplashScreen } from 'expo-router';

import React, { useCallback, useEffect } from 'react';
import { useAuth, useIsFirstTime } from '@/lib';

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

    return <Redirect href="/onboarding" />;

  }

  if (status === 'signOut') {

    return <Redirect href="/get-started" />;

  }


  return (
    <View>
      <Text>MainLayout</Text>
    </View>
  )
}

export default MainLayout