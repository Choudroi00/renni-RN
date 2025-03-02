import { useRouter } from 'expo-router';
import React from 'react';


import { useIsFirstTime } from '@/lib/hooks';
import { View } from 'react-native';
export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();
  return (
    <View className="flex h-full items-center  justify-center">
    
    </View>
  );
}
