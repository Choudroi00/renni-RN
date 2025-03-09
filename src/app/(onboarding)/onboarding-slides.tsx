import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SvgUri } from 'react-native-svg';
import Animated, {
  interpolate,
  interpolateColor,
  runOnJS,
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,

} from 'react-native-reanimated';
import { colorsScheme } from '@/components/ui/colors';
import { screenWidth } from '@/types/constants';
import { useRouter } from 'expo-router';





const OnboardingSlide = () => {

  const router = useRouter()

  const baseAssetsUrl = 'https://assets.ayoub-dev.xyz/app/';
  const slides = [
    {
      title: "What's RenniT ?",
      description:
        'Either you are a customer or an owner. Enjoy Rennit exclusive features and management tools.',
      img: 'audi-onb.png',
      background: 'onb-test.svg',
      bgColor: 'rgba(245, 245, 220, 1)'
    },
    {
      title: 'How to use RenniT ?',
      description:
        'RenniT is easy to use, you can start by creating an account, then you can start renting or renting your vehicle.',
      img: 'audi-onb.png',
      background: 'onb-test-3.svg?ts=3',
      bgColor: 'rgba(255, 190, 111, 1)'
    },
    {
      title: 'Why RenniT ?',
      description:
        'RenniT is nº1 management application, it is easy to use and has a lot of features that will help you manage your rent easily.',
      img: 'audi-onb.png',
      background: 'onb-test-2.svg?ts=1',
      bgColor: 'rgba(245, 245, 220, 1)'
    },
  ];

  const sliderRef = useRef<Animated.ScrollView>(null)

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideAnimator = useSharedValue(0)

  const heroColorAnimation = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        slideAnimator.value,
        slides.map((_, index) => index),
        slides.map((_) => _.bgColor)
      )
    }
  })



  const nextSlide = () => {

    if(currentSlide + 1 === slides.length){
      router.push('/auth')
    }

    setCurrentSlide((currentSlide + 1) % slides.length)
    slideAnimator.value = withTiming((currentSlide + 1) % slides.length, { duration: 800 })
    sliderRef.current?.scrollTo({ x: screenWidth * ((currentSlide + 1) % slides.length) })

  };

  return (
    <View className="w-full h-full bg-white flex-col">
      <Animated.View style={heroColorAnimation} className="flex-1 w-full items-center justify-center">
        <Image source={{ uri: baseAssetsUrl + slides[currentSlide].img as string }} style={{ position: 'absolute', top: 0, width: 300, aspectRatio: 1, zIndex: 1, objectFit: 'contain', marginTop: 50 }} />
        <Animated.ScrollView
          ref={sliderRef}
          style={[]}
          horizontal
          pagingEnabled
          contentContainerStyle={[{height: '100%', padding: 0}, heroColorAnimation]}
          showsHorizontalScrollIndicator={false}
          >

          {
            slides.map((item, index) => {
              return (
                <View key={index} style={{height: '100%', width: screenWidth, display: 'flex'}} >
                  <SvgUri height={'100%'} width={screenWidth} preserveAspectRatio="xMidYMid meet" style={{}}  uri={baseAssetsUrl + item.background}  />
                </View>
              )
            })
          }



        </Animated.ScrollView>
        {/* <Animated.View style={[heroAnimatedStyle]} >

          
        </Animated.View> */}
        {/* <View className="absolute top-0 left-0 w-full h-full">
          <SvgUri
            style={{ height: 300, width: 300, }}
            viewBox="0 0 100 100"
            uri={(baseAssetsUrl + slides[currentSlide].background) as string}
          />
        </View> */}

      </Animated.View>
      <View className="flex-1 flex-col items-center justify-center py-4 px-6">

        <View className="flex-row mt-6  gap-2">
          {slides.map((slide, index) => {
            const animatedStyle = useAnimatedStyle(() => {
              return {
                width: withSpring(currentSlide === index ? 40 : 16),
              };
            });
            return (

              <Animated.View
                className={`w-3 h-3 rounded-full`}
                style={[animatedStyle, { backgroundColor: colorsScheme.primary }]}
                key={index}
              ></Animated.View>
            )
          })}
        </View>


        <View className="flex-1 flex-col w-full py-6">

          <Text className=" mb-8 text-center text-3xl font-bold leading-10 black font-inter">
            {slides[currentSlide].title}
          </Text>


          <Text className=" text-left text-xl font-semibold leading-9 px-3 black font-inter">
            {slides[currentSlide].description}
          </Text>
        </View>
        <View className='w-full' >

          <View className='mx-6 rounded-full bg-slate-300  h-1' >

          </View>
        </View>
        <View className="pb-3 flex-row pt-3 px-3 ">
          <View className="flex-1"></View>

          <Pressable
            onPress={nextSlide}
            style={{ backgroundColor: colorsScheme.primary }}
            className={`rounded-full bg-[${colorsScheme.primary}] justify-center py-3.5 px-16`}
          >
            <Text className='font-semibold text-white text-xl ' >
              {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
            </Text>
          </Pressable>

        </View>
      </View>

    </View>
  );
};

export default OnboardingSlide;
