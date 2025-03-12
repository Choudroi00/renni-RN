/* eslint-disable react/no-unstable-nested-components */
import { Redirect, SplashScreen, Tabs } from 'expo-router';
import React, { useCallback, useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withSpring, 
  interpolateColor 
} from 'react-native-reanimated';
import { 
  Home, 
  Search, 
  Calendar, 
  User 
} from 'lucide-react';

import { useAuth, useIsFirstTime } from '@/lib';

const ICON_SIZE = 24;
const INDICATOR_HEIGHT = 4;
const TAB_BAR_HEIGHT = 60;
const SPRING_CONFIG = {
  damping: 15,
  stiffness: 120,
  mass: 1,
};

export default function TabLayout() {
  const status = useAuth.use.status();
  const [isFirstTime] = useIsFirstTime();
  const [activeTab, setActiveTab] = useState(0);
  const tabIndicatorPosition = useSharedValue(0);
  
  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);
  
  useEffect(() => {
    if (status !== 'idle') {
      setTimeout(() => {
        hideSplash();
      }, 1000);
    }
  }, [hideSplash, status]);

  if (isFirstTime) {
    return <Redirect href="/onboarding" />;
  }
  if (status === 'signOut') {
    return <Redirect href="/get-started" />;
  }

  const tabs = [
    { name: 'Home', icon: Home, route: '/home' },
    { name: 'Search', icon: Search, route: '/search' },
    { name: 'Reservations', icon: Calendar, route: '/reservations' },
    { name: 'Profile', icon: User, route: '/profile' },
  ];

  const handleTabPress = (index, route) => {
    setActiveTab(index);
    tabIndicatorPosition.value = withSpring(index, SPRING_CONFIG);
    // Add navigation logic here
  };

  const TabBar = () => {
    return (
      <View className="absolute bottom-0 left-0 right-0">
        <View className="rounded-t-lg bg-white shadow-lg elevation-5">
          <View className="flex-row h-16 items-center justify-around">
            {tabs.map((tab, index) => (
              <TabItem 
                key={tab.name}
                tab={tab}
                index={index}
                activeTab={activeTab}
                onPress={() => handleTabPress(index, tab.route)}
              />
            ))}
            <AnimatedIndicator position={tabIndicatorPosition} tabCount={tabs.length} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <>
      <Tabs tabBar={TabBar} />
    </>
  );
}

const TabItem = ({ tab, index, activeTab, onPress }) => {
  const IconComponent = tab.icon;
  
  const animatedIconStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      index === activeTab ? 1 : 0,
      [0, 1],
      ['#9CA3AF', '#3B82F6']
    );
    
    return {
      color,
    };
  });
  
  return (
    <TouchableOpacity 
      className="flex-1 items-center justify-center"
      onPress={onPress}
    >
      <Animated.View style={animatedIconStyle}>
        <IconComponent size={ICON_SIZE} />
      </Animated.View>
      <Text 
        className={`text-xs mt-1 ${index === activeTab ? 'text-blue-500' : 'text-gray-400'}`}
      >
        {tab.name}
      </Text>
    </TouchableOpacity>
  );
};

const AnimatedIndicator = ({ position, tabCount }) => {
  const indicatorWidth = 100 / tabCount;
  
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: withSpring(position.value * indicatorWidth + '%', SPRING_CONFIG) }
      ],
    };
  });
  
  return (
    <Animated.View
      style={[animatedStyle]}
      className="absolute bottom-0 h-1 rounded-t-full bg-blue-500"
      style={[
        animatedStyle,
        {
          height: INDICATOR_HEIGHT,
          width: `${indicatorWidth}%`,
        }
      ]}
    />
  );
};