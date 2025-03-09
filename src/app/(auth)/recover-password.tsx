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

const RecoverScreen = () => {
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
        {
          translateY: withTiming(headerHeightValue.value === 0 ? -70 : 0,
            { duration: 200, easing: Easing.out(Easing.ease) })
        }
      ],
    };
  });

  useEffect(() => {
    if (isKeyboardVisible) {
      handleInputFocus();
    } else {
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
          <Text className="text-3xl font-bold text-center">Recover Account</Text>
          <Text className="text-gray-500 text-center mt-2">
            we will send you a recovery link to your linked contact.
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


          <Pressable
            style={{ backgroundColor: colorsScheme.primary }}
            className="bg-gray-500 py-4 rounded-full mt-4"
            android_ripple={{ color: '#93C9FF', radius: 120 }}
          >
            <Text className="text-white text-center font-semibold text-lg">Send code</Text>
          </Pressable>


        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default RecoverScreen;