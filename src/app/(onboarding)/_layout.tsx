

import { View, Text } from 'react-native'
import React from 'react'
import GetStarted from './get-started'
import { Redirect, Stack, useRouter } from 'expo-router'

const OnboardingLayout = () => {
  const router = useRouter()


  return (
    <Stack>
      <Stack.Screen name="get-started" options={{headerShown: false}}  />
      <Stack.Screen name="onboarding-slides" options={{headerShown: false}}  />
    </Stack>
  )
  
}

export default OnboardingLayout