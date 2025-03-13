import { View, Text } from 'react-native'
import { Redirect, SplashScreen, Tabs, useNavigation } from 'expo-router';

import React, { useCallback, useEffect, useState } from 'react';
import { useAuth, useIsFirstTime } from '@/lib';
import XBottomTabs from '@/components/app/tabs-navigator';
import { useAppBarStore } from '@/lib/store/use-appbar-store';
import AnimatedAppBar from '@/components/app/app-bar';
import { BellDot, BrickWallIcon, User, User2Icon } from 'lucide-react-native';

const MainLayout = () => {

  const status = useAuth.use.status();

  const [isFirstTime] = useIsFirstTime();

  const navigator = useNavigation()

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
    return <Redirect href="/get-started" />;
  }

  const [index, setIndex] = useState(0);

  const updateAppBar = useAppBarStore.getState().updateAppBar;

  useEffect(()=>{

    switch(index) {
      case 0: // Home
        updateAppBar({ 
          title: 'Home',
          backgroundColor: '#FFFFFF',
          height: 90,
          rightAction: {
            onPress: () => {},
            icon: User 
          }
        });
        break;
      case 1: // Search
        updateAppBar({ 
          title: 'Search',
          backgroundColor: '#F5F5F5',
          height: 80,
        });
        break;
      case 2: // Reservations
        updateAppBar({ 
          title: 'My Reservations',
          backgroundColor: '#FFFFFF',
          height: 90,
        });
        break;
      case 3: // Profile
        updateAppBar({ 
          title: 'My Profile',
          backgroundColor: '#FFFFFF',
          height: 90,
          rightAction: {
            onPress: () => {},
            icon: BellDot 
          }

        });
        break;
      default:
        break;
    }
  }, [index]);
    
    
    const switchTab = (i : number) => {
      setIndex(i);
      
    }
  


  return (
    <View className='flex-1' >
      <AnimatedAppBar />

      <Tabs screenOptions={{headerShown: false}} tabBar={(props) => <XBottomTabs switchActiveTab={switchTab} {...props} />}   >
        <Tabs.Screen name='index'  />
        <Tabs.Screen name='search' />
        <Tabs.Screen name='reservations' />
        <Tabs.Screen name='profile' />
      </Tabs>
    </View>
  )
}

export default MainLayout