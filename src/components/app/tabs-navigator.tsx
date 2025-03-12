import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Calendar, Home, LucideIcon, Search, User } from 'lucide-react-native';
import Animated, { interpolateColor, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { colorsScheme } from '../ui/colors';


const ICON_SIZE = 24

type TabItemProps = {
  icon: LucideIcon,
  name: string,
  route: string, 

  index: number
  activeTab: number
  onPress: (i: number) => void
}


const TabItem = ({icon, name, route, index, activeTab, onPress} : TabItemProps) => {
  const IconComponent = icon

  const animatedColor = useAnimatedStyle(()=> {
    return {
      color: interpolateColor(
        withTiming(index === activeTab ? 0 : 1),
        [0, 1],
        ['#000' , colorsScheme.primary],
      ),
      opacity: 1
    }
  })


  return (
    <Pressable
      className="flex-1 items-center justify-center p-2"
      android_ripple={{radius: 30, color: colorsScheme.accent}}
      onPress={()=> onPress(index)} >
      <Animated.View style={[animatedColor]} >
        <IconComponent size={ICON_SIZE} />
      </Animated.View>
      <Text> {name} </Text>

    </Pressable>
  )
}



const XBottomTabs = () => {

  const activeTab = 0

  const tabs = [
    { name: 'Home', icon: Home, route: '/home' },
    { name: 'Search', icon: Search, route: '/search' },
    { name: 'Reservations', icon: Calendar, route: '/reservations' },
    { name: 'Profile', icon: User, route: '/profile' },
  ];

  return (
    <View className='rounded-t-3xl shadow-slate-300 py-8 px-8  bg-white absolute bottom-0 flex-row' >
      {
        tabs.map((item, index)=> {
          return (
            <TabItem
              key={index}
              index={index}
              activeTab={activeTab}
              onPress={(i)=> i}

              {...item}
             />
          )
        })
      }
    </View>
  )
}


export default XBottomTabs