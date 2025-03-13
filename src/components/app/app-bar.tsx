import { useAppBarStore } from '@/lib/store/use-appbar-store';
import { ChevronLeft, ChevronRight, LucideIceCreamCone, LucideIcon } from 'lucide-react-native';
import React, { useEffect, ReactElement } from 'react'; // Import ReactElement
import { StatusBar, SafeAreaView, View, Text, TouchableOpacity } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  withTiming,
  interpolateColor
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colorsScheme } from '../ui/colors';

const SPRING_CONFIG = {
  damping: 15,
  stiffness: 120,
  mass: 1,
};

interface AppBarAction {
  onPress: (() => void) | undefined;
  icon: LucideIcon | null;
}

const AnimatedAppBar = () => {
  const insets = useSafeAreaInsets();
  
  const { 
    height,
    backgroundColor,
    isVisible,
    title,
    rightAction,
    leftAction
  } = useAppBarStore();
  
  const animatedHeight = useSharedValue(height);
  const animatedBackgroundColor = useSharedValue(backgroundColor);
  const animatedOpacity = useSharedValue(isVisible ? 1 : 0);
  
  useEffect(() => {
    animatedHeight.value = withSpring(height, SPRING_CONFIG);
  }, [height, animatedHeight]);
  
  useEffect(() => {
    animatedBackgroundColor.value = backgroundColor;
  }, [backgroundColor, animatedBackgroundColor]);
  
  useEffect(() => {
    animatedOpacity.value = withTiming(isVisible ? 1 : 0, { duration: 200 });
  }, [isVisible, animatedOpacity]);
  
  const appBarAnimatedStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
      backgroundColor: animatedBackgroundColor.value,
      opacity: animatedOpacity.value,
      paddingTop: insets.top,
    };
  });
  
  const renderLeftAction = () => { 
    if (leftAction && leftAction.icon) {
      const Icon = leftAction.icon;
      return (
        <TouchableOpacity onPress={leftAction.onPress} style={{backgroundColor: colorsScheme.accent}} className="p-4 rounded-xl">
          <LucideIceCreamCone size={24} color="#000" />
        </TouchableOpacity>
      );
    }
    if(!leftAction) return null;
    return (
      <TouchableOpacity onPress={leftAction?.onPress} style={{backgroundColor: colorsScheme.accent}} className="p-4 rounded-xl">
        <ChevronLeft size={24} color="#000" />
      </TouchableOpacity>
    );

  };
  
  const renderRightAction = () => { 
    if (rightAction && rightAction.icon) {
      const Icon = rightAction.icon;
      return (
        <TouchableOpacity onPress={rightAction.onPress} className="p-3.5 bg-zinc-100 rounded-xl">
          <Icon size={21} color="#000" />
        </TouchableOpacity>
      );
    }else if(rightAction){

      return (
        <TouchableOpacity onPress={rightAction?.onPress} className="p-3 bg-slate-200 rounded-xl">
            <ChevronRight size={24} color="#000" />
          </TouchableOpacity>
      );
    }
  };
  
  return (
    <Animated.View 
      style={[appBarAnimatedStyle]} 
      className="shadow-md z-10"
    >
      <StatusBar 
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <View className="flex-row justify-between items-center h-full px-4">
        {renderLeftAction()}
        
        <Text className="font-semibold text-lg flex-1 text-center">
          {title}
        </Text>
        
        {renderRightAction()}
      </View>
    </Animated.View>
  );
};

export default AnimatedAppBar;