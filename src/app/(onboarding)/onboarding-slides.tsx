import { View, Text, Image, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SvgUri } from 'react-native-svg';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { colorsScheme } from '@/components/ui/colors';

const OnboardingSlide = () => {
  const baseAssetsUrl = 'https://assets.ayoub-dev.xyz/app/';
  const slides = [
    {
      title: "What's RenniT ?",
      description:
        'customer ? Enjoy Rennit exclusive features !\nowner ? enjoy management tools.',
      img: 'audi-onb.png',
      background: 'onboarding-1.svg?ts=1',
    },
    {
      title: 'How to use RenniT ?',
      description:
        'RenniT is easy to use, you can start by creating an account, then you can start renting or renting your vehicle.',
      img: 'audi-onb.png',
      background: 'onboarding-2.svg?ts=1',
    },
    {
      title: 'Why RenniT ?',
      description:
        'RenniT is nº1 management application, it is easy to use and has a lot of features that will help you manage your rent easily.',
      img: 'audi-onb.png',
      background: 'onboarding-3.svg?ts=1',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) {
      setCurrentSlide(0);
      return;
    }
    setCurrentSlide(Math.min(currentSlide + 1, slides.length - 1));
  };

  return (
    <View className="w-full h-full bg-white flex-col">
      <View className="flex-1 overflow-hidden bg-white w-full items-center justify-center pb-4">
        <Image source={{uri: baseAssetsUrl + slides[currentSlide].img as string}} style={{position: 'absolute', top: 0, width: 300, aspectRatio: 1, zIndex:1, objectFit: 'contain', marginTop: 50}}   />
        <SvgUri
            style={{ height: '100%', width: '100%', }}
            
            uri={(baseAssetsUrl + slides[currentSlide].background) as string}
          />
    {/* <View className="absolute top-0 left-0 w-full h-full">
          <SvgUri
            style={{ height: 300, width: 300, }}
            viewBox="0 0 100 100"
            uri={(baseAssetsUrl + slides[currentSlide].background) as string}
          />
        </View> */}

      </View>
      <View className="flex-1 flex-col items-center justify-center py-4 px-6">
        
          <View className="flex-row mt-6  gap-2">
            {slides.map((slide, index) => {
              const animatedStyle = useAnimatedStyle(() => {
                return {
                  width: withSpring(currentSlide === index ? 40 : 16) ,
                };
              });
              return (

              <Animated.View
                className={`w-4 h-4 rounded-full  '}`}
                style={[animatedStyle, { backgroundColor: colorsScheme.primary }]}
                key={index}
              ></Animated.View>
            )})}
          </View>


          <View className="flex-1 w-full py-6">
            
            <Text className=" mb-8 text-center text-3xl font-bold leading-10 black font-inter">
              {slides[currentSlide].title}
            </Text>
            

            <Text  className=" text-left text-xl font-bold leading-9 px-4 black font-inter">
              {slides[currentSlide].description}
            </Text>
          </View>
          <View className="pb-3 flex-row pt-3 px-3 ">
            <View className="flex-1"></View>
            
              <Pressable
                onPress={nextSlide}
                style={{backgroundColor: colorsScheme.primary}}
                className={`rounded-full bg-[${colorsScheme.primary}] justify-center py-4 px-16`}
              >
                <Text className='font-semibold font-inter text-white text-xl ' >
                  {currentSlide === slides.length - 1 ? 'Get Started' : 'Next'}
                </Text>
              </Pressable>
            
          </View>
        </View>
      
    </View>
  );
};

export default OnboardingSlide;
