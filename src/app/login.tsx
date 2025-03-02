import { Link, useRouter } from 'expo-router';
import React from 'react';

import { useAuth } from '@/lib';
import { SvgUri } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, Pressable, Text, View } from 'react-native';
import { colorsScheme } from '@/components/ui/colors';

export default function Login() {
  const router = useRouter();
  const signIn = useAuth.use.signIn();

  return (
    <>
      <View className="flex-1 bg-white">
        <View className="" style={{ height: 60, width: '100%' }}></View>
        <View className="flex-1 justify-center items-center pb-4">
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

        <View className="flex-1 justify-center items-center">
          <LinearGradient
            colors={[colorsScheme.primary, '#93C9FF', '#FFF']}
            style={{ height: '100%', width: '100%' }}
          >
            <View className="flex-1 flex-col pb-8">
              <View className="justify-center px-14">
                <View className="flex-row gap-4 w-full justify-center">
                  <Text
                    className="text-center text-3xl font-semibold text-white leading-10 -top-8"
                    style={{ color: colorsScheme.accent }}
                  >
                    Welcome To
                  </Text>
                  <Text
                    className="text-center text-3xl font-semibold text-slate-200 leading-10 -top-8"
                    style={{}}
                  >
                    RenniT !
                  </Text>
                </View>
                <Text
                  className="text-center text-3xl font-semibold text-white leading-10 -top-8"
                  style={{ color: colorsScheme.accent }}
                >
                  The Rent Master
                </Text>

                
              </View>
              <View className="flex-1 justify-end pb-6 px-10">
                  <Text style={{fontFamily: "Montserrat-Regular", fontWeight: 700, color: "#002041" }} className="text-xl text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                  </Text>
              </View>

              <View className="px-8">
                <Pressable
                  android_ripple={{ color: '#93C9FF', radius: 100 }}
                  className=" rounded-full justify-center flex-row py-5 font-inter"
                  style={{ backgroundColor: colorsScheme.primary,   }}
                >
                  <Text className="text-white font-semibold text-xl" style={{fontFamily: "Montserrat-Regular", fontWeight: 700 }}>
                    Let's get started
                  </Text>
                </Pressable>
                <View className="py-5 justify-center flex-row  ">
                  <Text className="text-black text-lg font-medium "  style={{fontFamily: "Montserrat-Regular", fontWeight: 700 }}>
                    Alredy have an account ?
                  </Text>
                  <Link
                    href="/login"
                    className="text-blue-500 font-bold underline ms-3"
                    asChild
                  >
                    <Pressable
                      android_ripple={{ color: '#93C9FF', radius: 20 }}
                      className="font-inter"
                      style={{}}
                    >
                      <Text
                        className="text-white font-semibold text-lg underline "
                        style={{fontFamily: "Montserrat-Regular", fontWeight: 700, color: colorsScheme.primary }}
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
