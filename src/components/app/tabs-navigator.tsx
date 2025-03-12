import { LayoutChangeEvent, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Calendar, Home, LucideIcon, Search, User } from 'lucide-react-native';
import Animated, { interpolateColor, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import { colorsScheme } from '../ui/colors';



const ICON_SIZE = 22

type TabItemProps = {
  icon: LucideIcon,
  name: string,
  route: string, 

  index: number
  activeTab: number
  onPress: (i: number) => void
}


const TabItem = ({icon, name, route, index, activeTab, onPress} : TabItemProps) => {
  const IconComponent =  icon 

  const animatedColor = useAnimatedStyle(()=> {
    return {
      color: interpolateColor(
        index === activeTab ? 0 : 1,
        [0, 1],
        ['#000000' , colorsScheme.primary],
      ),
      opacity: 1
    }
  })

  
  return (
    <Pressable
      className="flex-1 items-center justify-center"
      android_ripple={{radius: 30, color: colorsScheme.accent}}
      onPress={()=> onPress(index)} >
      <Animated.View style={[animatedColor]} >
        <IconComponent color={'#000'} size={ICON_SIZE} />
      </Animated.View>
      <Text> {name} </Text>

    </Pressable>
  )
}



const XBottomTabs = () => {

  const [activeTab, setActiveTab] = useState(0);
  const [tabSize, setTabSize] = useState(0)

  const tabSizeOnLayout = (event: LayoutChangeEvent) => {
    setTabSize(event.nativeEvent.layout.width)
  }
  const tabs = [
    { name: 'Home', icon: Home, route: '/home' },
    { name: 'Search', icon: Search, route: '/search' },
    { name: 'Orders', icon: Calendar, route: '/reservations' },
    { name: 'Profile', icon: User, route: '/profile' },
  ];

  const animatedIndicatorStyle = useAnimatedStyle(()=> {
    return {
      transform: [
        { translateX: withSpring(activeTab, {duration: 400}) * tabSize },
        
      ],
      width: tabSize
    }
  })

  return (
    <View className='rounded-t-3xl shadow-slate-300 py-6 px-8  bg-white absolute bottom-0 flex-col' >
      <View className='flex-row' >

        {
          tabs.map((item, index)=> {
            return (
              <View onLayout={tabSizeOnLayout} >
                <TabItem
                  
                  key={index}
                  index={index}
                  activeTab={activeTab}
                  onPress={(i)=> setActiveTab(i)}
    
                  {...item}
                />
              </View>
            )
          })
        }
      </View>

      <Animated.View
        style={[animatedIndicatorStyle, {height: 5, borderTopLeftRadius: 40,borderTopRightRadius: 40, backgroundColor: colorsScheme.primary, width: 40 }]}>

      </Animated.View>
    </View>
  )
}


export default XBottomTabs