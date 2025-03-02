import { LinearGradient } from 'expo-linear-gradient';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { SvgUri } from 'react-native-svg';

import { colorsScheme } from '@/components/ui/colors';
import { useAuth } from '@/lib';

export default function Login() {
  

  return (
    <>
      <View className="flex-1 bg-white">
        <View className="" style={{ height: 60, width: '100%' }}></View>
        <View className="flex-1 items-center justify-center pb-4">
          <Image
            source={{ uri: 'https://assets.ayoub-dev.xyz/audi-onb.png' }}
            style={{ height: 200, width: 300 }}
          />
          <View className="absolute bottom-0 w-full" style={{ height: 160 }}>
            <SvgUri
              style={{ height: 160, width: '100%' }}
              uri={'https://assets.ayoub-dev.xyz/wave3.svg'}
            />
            <View
              className="absolute bottom-0 w-full"
              style={{ height: 18, backgroundColor: colorsScheme.primary }}
            ></View>
          </View>
        </View>

        <View className="flex-1 items-center justify-center">
          <LinearGradient
            colors={[colorsScheme.primary, '#FFF', '#FFF']}
            style={{ height: '100%', width: '100%' }}
          >
            <View className="flex-1 flex-col pb-8">
              <View className="justify-center px-14">
                <View className="w-full flex-row justify-center gap-4">
                  <Text
                    className="-top-8 text-center text-3xl font-semibold leading-10 text-white"
                    style={{ color: colorsScheme.accent }}
                  >
                    Welcome To
                  </Text>
                  <Text
                    className="-top-8 text-center text-3xl font-semibold leading-10 text-slate-200"
                    style={{}}
                  >
                    RenniT !
                  </Text>
                </View>
                <Text
                  className="-top-8 text-center text-3xl font-semibold leading-10 text-white"
                  style={{ color: colorsScheme.accent }}
                >
                  The Rent Master
                </Text>
              </View>
              <View className="flex-1 justify-end px-10 pb-6">
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontWeight: 700,
                    color: '#002041',
                  }}
                  className="text-center text-xl"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, quos.
                </Text>
              </View>

              <View className="px-8">
                <Pressable
                  android_ripple={{ color: '#93C9FF', radius: 100 }}
                  className=" flex-row justify-center rounded-full py-5 font-inter"
                  style={{ backgroundColor: colorsScheme.primary }}
                >
                  <Text
                    className="text-xl font-semibold text-white"
                    style={{
                      fontFamily: 'Montserrat-Regular',
                      fontWeight: 700,
                    }}
                  >
                    Let's get started
                  </Text>
                </Pressable>
                <View className="flex-row justify-center py-5  ">
                  <Text
                    className="text-lg font-medium text-black "
                    style={{
                      fontFamily: 'Montserrat-Regular',
                      fontWeight: 700,
                    }}
                  >
                    Alredy have an account ?
                  </Text>
                  <Link
                    href="/login"
                    className="ms-3 font-bold text-blue-500 underline"
                    asChild
                  >
                    <Pressable
                      android_ripple={{ color: '#93C9FF', radius: 20 }}
                      className="font-inter"
                      style={{}}
                    >
                      <Text
                        className="text-lg font-semibold text-white underline "
                        style={{
                          fontFamily: 'Montserrat-Regular',
                          fontWeight: 700,
                          color: colorsScheme.primary,
                        }}
                      >
                        Login
                      </Text>
                    </Pressable>
                  </Link>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </View>
    </>
  );
}
