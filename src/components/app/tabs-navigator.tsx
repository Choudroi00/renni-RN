import { LayoutChangeEvent, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Home, LucideHeart, LucideIcon, Search, User, User2Icon } from 'lucide-react-native';
import Animated, { 
  interpolateColor, 
  useAnimatedStyle, 
  withSpring, 
  useSharedValue, 
  withTiming,
  interpolate
} from 'react-native-reanimated';
import { colorsScheme } from '../ui/colors';
import { useNavigation } from "expo-router";
import { BottomTabDescriptorMap, BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs/src/types";
import { TabNavigationState, NavigationHelpers } from "@react-navigation/native";
import { EdgeInsets } from "react-native-safe-area-context";

import { BlurView } from 'expo-blur';

const ICON_SIZE = 22;

type TabItemProps = {
  icon: LucideIcon,
  name: string,
  route: string,
  index: number,
  activeTab: number,
  onPress: (i: number) => void
}

type ParamListBase = {
  [x: string]: object | undefined;
}


type XBottomTabsProps = { 
  state: TabNavigationState<ParamListBase>; 
  descriptors: BottomTabDescriptorMap; 
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>; 
  insets: EdgeInsets; 

  switchActiveTab: (index: number) => void;
}

const TabItem = ({ icon, name, route, index, activeTab, onPress }: TabItemProps) => {
  const IconComponent = icon;
  const isActive = index === activeTab;

  const animatedStyle = useAnimatedStyle(()=> {
    return {
      height: withTiming(isActive? 18 : 0),
      opacity: withTiming(isActive ? 1 : 0)
    }
  })

   
  
  return (
    <Pressable
      className="flex-1 items-center justify-center"
      android_ripple={{ radius: 40, color: "#dedede" }}
      onPress={() => onPress(index)}>
      <View>
        <IconComponent 
          color={isActive ? colorsScheme.primary : '#000'} 
          size={ICON_SIZE} 
        />
      </View>
      <Animated.Text style={[animatedStyle,{ color: isActive ? colorsScheme.primary : '#000', fontWeight: 600, marginTop: 5 }]}> 
        {name} 
      </Animated.Text>
      
    </Pressable>
  );
}

const XBottomTabs : React.FC<XBottomTabsProps> = ({ switchActiveTab, navigation }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabPositions = useRef<number[]>([0, 0, 0, 0]);
  const containerWidth = useSharedValue(0);

  
  
  const tabs = [
    { name: 'Home', icon: Home, route: 'index' },
    { name: 'Search', icon: Search, route: 'search' },
    { name: 'Orders', icon: Calendar, route: 'reservations' },
    { name: 'Favorite', icon: LucideHeart, route: 'favorite' },

    { name: 'Profile', icon: User2Icon, route: 'profile' },
  ];


  useEffect(()=>{
    switchActiveTab(activeTab)
    navigation.navigate(tabs[activeTab].route)
  }, [activeTab]);

  
  const handleContainerLayout = (event: LayoutChangeEvent) => {
    const width = event.nativeEvent.layout.width;
    containerWidth.value = width ;
  };

  const animatedIndicatorStyle = useAnimatedStyle(() => {
    
    const tabWidth = (containerWidth.value / tabs.length) ;
    return {
      transform: [
        { translateX: withSpring(activeTab * (tabWidth), { damping: 10 }) },
      ],
      left: tabWidth / 4
      
    };
  }, [containerWidth, activeTab]);

  return (

    <BlurView experimentalBlurMethod="dimezisBlurView" intensity={60} className="rounded-t-3xl overflow-hidden border-t-[1px] border-r-[1px] border-l-[1px] border-slate-200 shadow-slate-800 elevation-2xl pt-3 h-[74px] px-8 w-full bg-transparent absolute bottom-0 flex-col">
      
      <View className="flex-row h-[46]" onLayout={handleContainerLayout}>
        {tabs.map((item, index) => (
          <TabItem
            key={index}
            index={index}
            activeTab={activeTab}
            onPress={(i) => setActiveTab(i)}
            {...item}
          />
        ))}
      </View>
      <Animated.View
        style={[
          animatedIndicatorStyle, 
          {
            height: 7, 
            width: 7,
            borderRadius: 9999,
             
            backgroundColor: colorsScheme.primary,
            marginStart: 15
          }
        ]}
      />
    </BlurView>
  );
}

export default XBottomTabs;