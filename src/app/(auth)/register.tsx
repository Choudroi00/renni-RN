import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, Pressable, Image, ScrollView, LayoutChangeEvent, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Eye } from 'lucide-react-native';
import Animated, { 
  useAnimatedStyle, 
  useSharedValue, 
  withTiming,
  Easing,
  withDecay,
  withDelay
} from 'react-native-reanimated';
import useKeyboard from '@/lib/hooks/use-keyboard';

const SignUpScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const insets = useSafeAreaInsets();

  
  const headerHeightValue = useSharedValue(1000);
  const headerOpacityValue = useSharedValue(1);
  
  const isKeyboardVisible = useKeyboard();

  useEffect(() => {
    if (isKeyboardVisible) {
      headerOpacityValue.value = withTiming(0, { duration: 200, easing: Easing.out(Easing.ease) });
      headerHeightValue.value = withTiming(0, { duration: 200, easing: Easing.out(Easing.ease) });
    } else {
      setTimeout(() => {
        headerOpacityValue.value = withDelay(
          50,
          withTiming(1, { duration: 300, easing: Easing.inOut(Easing.ease) })
        );
        headerHeightValue.value = withDelay(
          50,
          withTiming(100, { duration: 300, easing: Easing.inOut(Easing.ease) })
        );
      }, 100);
    }
  }, [isKeyboardVisible]);

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      width: '100%',
      height: headerHeightValue.value,
      opacity: headerOpacityValue.value,
      overflow: 'hidden'
    };
  }, []);

  const getHeightOnLayout = (e: LayoutChangeEvent) => {
    if (headerHeightValue.value === 1000) {
      headerHeightValue.value = e.nativeEvent.layout.height;
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={{height: '100%', width: '100%', justifyContent: 'center'}}
      
    >
      <View 
        className="h-full bg-white px-6"
        style={{ paddingTop: insets.top + 100, paddingBottom: insets.bottom }}
      >
        <Animated.View 
          onLayout={getHeightOnLayout} 
          style={animatedHeaderStyle} 
          className="justify-center"
        >
          <Text className="text-3xl font-bold text-center">Create Account</Text>
          <Text className="text-gray-500 text-center mt-2">
            Fill your information below or register with your social account.
          </Text>
        </Animated.View>
        
        <View className="flex-1">
          <View className="space-y-6">
            {/* Name field */}
            <View className="mb-3">
              <Text className="text-gray-700 mb-3">Name</Text>
              <TextInput
                className="bg-gray-100 p-4 rounded-lg text-gray-700"
                placeholder="Ex. John Doe"
                placeholderTextColor="#9ca3af"
              />
            </View>

            {/* Email field */}
            <View className="mb-3">
              <Text className="text-gray-700 mb-2">Email</Text>
              <TextInput
                className="bg-gray-100 p-4 rounded-lg text-gray-700"
                placeholder="example@gmail.com"
                placeholderTextColor="#9ca3af"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password field */}
            <View className="mb-3">
              <Text className="text-gray-700 font-inter mb-2">Password</Text>
              <View className="relative">
                <TextInput
                  className="bg-gray-100 p-4 rounded-lg text-gray-700"
                  secureTextEntry={!showPassword}
                  placeholder="•••••••••••••••"
                  placeholderTextColor="#9ca3af"
                />
                <Pressable
                  className="absolute right-4 top-0 bottom-0 justify-center"
                  onPress={() => setShowPassword(!showPassword)}
                  android_ripple={{ color: 'rgba(0, 0, 0, 0.1)', borderless: true, radius: 20 }}
                >
                  <Eye color={'black'} size={24} />
                </Pressable>
              </View>
            </View>

            {/* Terms checkbox */}
            <View className="flex-row mb-4 items-center">
              <Pressable
                className="w-6 h-6 mr-2 items-center justify-center border border-gray-300 rounded"
                onPress={() => setAgreed(!agreed)}
                android_ripple={{ color: 'rgba(0, 0, 0, 0.1)', borderless: true, radius: 20 }}
              >
                {agreed && (
                  <View className="w-4 h-4 bg-gray-500 rounded-sm" />
                )}
              </Pressable>
              <Text className="text-gray-700">
                Agree with{' '}
                <Text className="text-gray-600 underline">Terms & Condition</Text>
              </Text>
            </View>

            {/* Sign Up button */}
            <Pressable
              className="bg-gray-500 py-4 rounded-full mt-4"
              android_ripple={{ color: 'rgba(255, 255, 255, 0.2)' }}
            >
              <Text className="text-white text-center font-semibold text-lg">Sign Up</Text>
            </Pressable>

            {/* Social sign up section */}
            <View className="mt-6 mb-4">
              <View className="flex-row items-center justify-center">
                <View className="h-px flex-1 bg-gray-200" />
                <Text className="mx-4 text-gray-500">Or sign up with</Text>
                <View className="h-px flex-1 bg-gray-200" />
              </View>

              <View className="flex-row justify-center space-x-6 mt-6">
                {/* Apple button */}
                <Pressable
                  className="w-12 h-12 items-center justify-center bg-white rounded-full border border-gray-200"
                  android_ripple={{ color: 'rgba(0, 0, 0, 0.1)', borderless: true, radius: 30 }}
                >
                </Pressable>

                {/* Google button */}
                <Pressable
                  className="w-12 h-12 items-center justify-center bg-white rounded-full border border-gray-200"
                  android_ripple={{ color: 'rgba(0, 0, 0, 0.1)', borderless: true, radius: 30 }}
                >
                </Pressable>

                {/* Facebook button */}
                <Pressable
                  className="w-12 h-12 items-center justify-center bg-white rounded-full border border-gray-200"
                  android_ripple={{ color: 'rgba(0, 0, 0, 0.1)', borderless: true, radius: 30 }}
                >
                </Pressable>
              </View>
            </View>

            {/* Sign In link */}
            <View className="flex-row justify-center mb-6">
              <Text className="text-gray-700">Already have an account? </Text>
              <Pressable>
                <Text className="text-gray-700 font-semibold">Sign In</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;