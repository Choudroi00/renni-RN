import { LinearGradient } from 'expo-linear-gradient';
import { Link, router, useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { colorsScheme } from '@/components/ui/colors';
import { useAuth } from '@/lib';

export default function GetStarted() {
  return (
    <>
      <View className="flex-1 bg-white">
        <View className="" style={{ height: 60, width: '100%' }}></View>
        <View className="flex-1 items-center justify-center pb-4">
          <Image
            source={{ uri: 'https://assets.ayoub-dev.xyz/audi-onb.png' }}
            style={{ height: 200, width: 300, zIndex: 1 }}
          />

          <View className="absolute top-0 left-0 w-full h-full">
            <SvgUri
              style={{ height: '100%', width: '100%' }}
              uri={'https://assets.ayoub-dev.xyz/vortex2.svg'}
            />
          </View>
        </View>

        <View className="flex-1 items-center justify-center">
          <View className="flex-1 flex-col pb-8">
            <View className="justify-center px-14">
              <View className="w-full flex-row justify-center gap-4">
                <Text className="-top-8 text-center text-3xl font-semibold leading-10 black font-inter">
                  Welcome to
                </Text>
                <Text
                  className="-top-8 text-center text-3xl font-semibold leading-10 text-blue-600"
                  style={{}}
                >
                  RenniT !
                </Text>
              </View>
              <Text className="-top-8 text-center text-3xl font-semibold leading-10 black font-inter">
                The rent Master
              </Text>
            </View>

            <View className="px-8 flex-1 flex-col justify-end">
              <Link href="/onboarding-slides" className="font-inter" asChild>
                <Pressable
                  android_ripple={{ color: '#93C9FF', radius: 100 }}
                  className=" flex-row justify-center rounded-full py-5 font-inter"
                  style={{ backgroundColor: colorsScheme.primary }}
                  
                >
                  <Text
                    className="text-xl font-semibold text-white">
                    Let's get started
                  </Text>
                </Pressable>
              </Link>
              <View className="flex-row justify-center py-5  ">
                <Text className="text-lg font-medium text-black ">
                  Alredy have an account ?
                </Text>
                <Link
                  href="/onboarding-slides"
                  className="ms-3 font-bold text-blue-500 underline"
                  asChild
                >
                  <Pressable
                    android_ripple={{ color: '#93C9FF', radius: 20 }}
                    className="font-inter"
                    style={{}}
                    
                  >
                    <Text
                      className="text-lg font-semibold "
                      style={{
                        
                        fontWeight: 700,
                        color: colorsScheme.primary,
                      }}
                    >
                      Login
                    </Text>
                  </Pressable>
                </Link>
              </View>
              <View className="justify-end px-4 pb-4">
                <Text
                  style={{ color: colorsScheme.primary }}
                  className="text-center text-xl font-medium underline"
                >
                  By using this app you accept our terms
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
