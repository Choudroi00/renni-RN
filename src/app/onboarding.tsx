import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import { useIsFirstTime } from '@/lib/hooks';
export default function Onboarding() {
  const [_, setIsFirstTime] = useIsFirstTime();
  const router = useRouter();
  return <View className="flex h-full items-center  justify-center"></View>;
}
