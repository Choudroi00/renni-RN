import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import AntDesign from '@expo/vector-icons/AntDesign';
import { Eye } from 'lucide-react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Easing,
  interpolate,
} from 'react-native-reanimated';
import useKeyboard from '@/lib/hooks/use-keyboard';
import { colorsScheme } from '@/components/ui/colors';

const AuthScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const insets = useSafeAreaInsets();
  const isKeyboardVisible = useKeyboard();

  const [isLogin, setIsLogin] = useState(false);

  
  const headerHeightValue = useSharedValue(150);
  const headerOpacityValue = useSharedValue(1);
  const fieldHeightValue = useSharedValue(90);

  useEffect(() => {
    if (isLogin) {
      fieldHeightValue.value = withTiming(0, { duration: 200, easing: Easing.out(Easing.ease) });
      
    } else {
      fieldHeightValue.value = withTiming(90, { duration: 300, easing: Easing.inOut(Easing.ease) });
      
    }
  }, [isLogin]);

  const animatedFieldStyle = useAnimatedStyle(() => {
    return {
      height: fieldHeightValue.value,
      opacity: interpolate(fieldHeightValue.value, [0, 90], [0, 1]),
    }
  })
  
  
  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      height: headerHeightValue.value,
      opacity: headerOpacityValue.value,
      marginBottom: headerHeightValue.value === 0 ? 0 : 20, 
    };
  });
  
  
  const animatedFormContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withTiming(headerHeightValue.value === 0 ? -70 : 0, 
          { duration: 200, easing: Easing.out(Easing.ease) }) }
      ],
    };
  });

  useEffect(() => {
    if(isKeyboardVisible) {
      handleInputFocus();
    }else {
      handleInputBlur();
    }
  }, [isKeyboardVisible])

  
  const handleInputFocus = () => {
    
    headerHeightValue.value = withTiming(0, { 
      duration: 200, 
      easing: Easing.out(Easing.ease) 
    });
    headerOpacityValue.value = withTiming(0, { 
      duration: 150, 
      easing: Easing.out(Easing.ease) 
    });
  };

  
  const handleInputBlur = () => {
    
    if (!isKeyboardVisible) {
      headerHeightValue.value = withTiming(150, { 
        duration: 300, 
        easing: Easing.inOut(Easing.ease) 
      });
      headerOpacityValue.value = withTiming(1, { 
        duration: 300, 
        easing: Easing.inOut(Easing.ease) 
      });
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        handleInputBlur();
      }}
      accessible={false}>

      <View
        className="flex-1 bg-white px-6"
        style={{ paddingTop: 67, paddingBottom: 25 }}>

        <Animated.View
          style={animatedHeaderStyle}
          className="justify-center">
          <Text className="text-3xl font-bold text-center">Create Account</Text>
          <Text className="text-gray-500 text-center mt-2">
            Fill your information below or register with your social account.
          </Text>
        </Animated.View>


        <Animated.View style={animatedFormContainerStyle}>
          <View className="mb-3">
            <Text className="text-gray-700 mb-3 font-semibold">Username</Text>
            <TextInput
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className="bg-gray-100 p-4 rounded-lg text-gray-700"
              placeholder="Ex. John Doe"
              placeholderTextColor="#9ca3af"
            />
          </View>
          <Animated.View style={animatedFieldStyle} className="mb-3">
            <Text className="text-gray-700 mb-2 font-semibold">Phone</Text>
            <TextInput
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              className="bg-gray-100 p-4 rounded-lg text-gray-700"
              placeholder="Ex. 07 xxx xxx xx"
              placeholderTextColor="#9ca3af"
              keyboardType="phone-pad"
              autoCapitalize="none"
            />
          </Animated.View>
          <View className="mb-3">
            <Text className="text-gray-700 mb-2 font-semibold">Password</Text>
            <View className="relative">
              <TextInput
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
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
          <View className="flex-row mb-4 items-center">
            <Pressable
              className="w-6 h-6 mr-2 items-center justify-center border border-gray-300 rounded"
              onPress={() => setAgreed(!agreed)}
              android_ripple={{ color: 'rgba(0, 0, 0, 0.1)', borderless: true, radius: 20 }}
            >
              {agreed && (
                <View className="w-4 h-4 bg-blue-500 rounded-sm" />
              )}
            </Pressable>
            <Text className="text-gray-700">
              Agree with{' '}
              <Text style={{ color: colorsScheme.primary }} className="text-gray-600 underline">Terms & Condition</Text>
            </Text>
          </View>

          <Pressable
            style={{ backgroundColor: colorsScheme.primary }}
            className="bg-gray-500 py-4 rounded-full mt-4"
            android_ripple={{ color: '#93C9FF', radius: 120 }}
          >
            <Text className="text-white text-center font-semibold text-lg">Sign Up</Text>
          </Pressable>

          <View className="mt-6 mb-4">
            <View className="flex-row items-center justify-center">
              <View className="h-px flex-1 bg-gray-200" />
              <Text className="mx-4 text-gray-500">Or sign up with</Text>
              <View className="h-px flex-1 bg-gray-200" />
            </View>

            <View className="flex-row justify-center bg-slate-200 rounded-full mx-2 mt-6">
              <View className='flex-1 pr-2 rounded-full' style={{ backgroundColor: colorsScheme.primary }} >
                <Pressable android_ripple={{ color: '#93C9FF', borderless: false, radius: 50 }} className='rounded-full py-4 justify-center items-center flex-row'   >
                  <AntDesign name="google" size={24} color="white" />
                  <Text className='text-white text-xl font-semibold ml-2' >
                    Google
                  </Text>
                </Pressable>
              </View>
              <View className='flex-1 px-2' >
                <Pressable android_ripple={{ color: 'rgba(0, 0, 0, 0.1)', borderless: false, radius: 50 }} className='rounded-full py-4 justify-center items-center flex-row'   >
                  <AntDesign name="apple-o" size={24} color="black" />
                  <Text className='text-black text-xl font-semibold ml-2' >
                    Apple
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>

          {/* Sign In link */}
          <View className="flex-row justify-center mb-6">
            <Text className="text-gray-700">{isLogin ? "New to rennit ?" : "Already have an account?"} </Text>
            <Pressable onPress={() => setIsLogin(!isLogin)} >
              <Text style={{ color: colorsScheme.primary }} className="text-gray-700 font-semibold">{isLogin ? "Sign Up" : "Sign In"}</Text>
            </Pressable>
          </View>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AuthScreen;