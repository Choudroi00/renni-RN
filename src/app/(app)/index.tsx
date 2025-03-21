import React, { useCallback } from 'react';

import VehicleElement from '@/components/home/vehicle-element';
import { NativeScrollEvent, ScrollView, Text, View } from 'react-native';
import { colorsScheme } from '@/components/ui/colors';
import { useAppBarStore } from '@/lib/store/use-appbar-store';
import { NativeSyntheticEvent } from 'react-native';
import { ChevronDown, ChevronRight, LocateFixed, MapPinCheck, Search, SearchX, Settings2Icon } from 'lucide-react-native';

export default function Home() {

  const { updateAppBar, setBackgroundColor, setHeight, setBarChild } = useAppBarStore.getState()

  const scrollObserver = useCallback((event: NativeSyntheticEvent<NativeScrollEvent>)=>{
    const { contentOffset } = event.nativeEvent

    if(contentOffset.y > 100){
      setBackgroundColor('#ffffff')
      setHeight(100)

      setBarChild((
        <View>
          <Text className='text-black ml-4 text-xl font-bold' >
            RenniT
          </Text>
        </View>
      ))
      
    }else{
      setBackgroundColor(colorsScheme.primary)
      setHeight(90)

      setBarChild((
        <View className='flex-row space-x-2 px-4 ' >
          <MapPinCheck size={22} color={'#ffffff'}  />
          <Text className='text-white ml-4 text-xl font-semibold' >
            Algeria, Algiers
          </Text>
          
        </View>
      ))
    }
    
    
  }, [])
  
  return (

    <ScrollView showsVerticalScrollIndicator={false} contentContainerClassName='pb-40' onScroll={scrollObserver} >
      
      <View className='w-full h-full bg-white' >
        <View className='rounded-b-[30] w-full h-48 grid-cols-2 mb-8 justify-center items-center space-x-6 px-7' style={{backgroundColor: colorsScheme.primary}} >
          <View className='flex-row space-x-4' >
            <View className='rounded-xl flex-row bg-slate-50 px-8 py-4 flex-1 me-5' >
              <Search size={20} color={colorsScheme.primary}  />
              <Text className='text-slate-300 text-xl mx-4' >Search nearby</Text>
            </View>
            <View className='p-4 aspect-square bg-slate-50 justify-center items-center rounded-xl' >
              <Settings2Icon size={20} color={colorsScheme.primary}  />
            </View>
          </View>
          
        </View>
        <View className='px-6' >

        <View className=' w-full my-5 justify-center '  >
          <View className='flex-row' >  

            <View className='mb-6 px-6 flex-col' >

              <Text className='text-slate-800 text-2xl font-medium ' >
                Top Brands
              </Text>
              <View className='rounded-full h-2 w-[70%]' style={{backgroundColor: colorsScheme.primary}}  ></View>
            </View>

            <View className='flex-1 justify-end flex-row items-start px-6' >
              <Text className='text-slate-400 text-sm mr-2' >see more</Text>
              <ChevronRight size={20} color={'black'} />
            </View>
          </View>
          <View className='flex-row justify-around mb-3' >
            <View className='rounded-3xl bg-slate-200 h-24 aspect-square ' ></View>
            <View className='rounded-3xl bg-slate-200 h-24 aspect-square ' ></View>
            <View className='rounded-3xl bg-slate-200 h-24 aspect-square ' ></View>
          </View>

          <View className='flex-row justify-around mb-3' >
            <View className='rounded-3xl bg-slate-200 h-24 aspect-square ' ></View>
            <View className='rounded-3xl bg-slate-200 h-24 aspect-square ' ></View>
            <View className='rounded-3xl bg-slate-200 h-24 aspect-square ' ></View>
          </View>
          
        </View>

        <View className='flex-row' >  

            <View className='mb-6 px-6 flex-col' >

              <Text className='text-slate-800 text-2xl font-medium ' >
                Nearby Articles
              </Text>
              <View className='rounded-full h-2 w-[70%]' style={{backgroundColor: colorsScheme.primary}}  ></View>
            </View>

            <View className='flex-1 justify-end flex-row items-start px-6' >
              <Text className='text-slate-400 text-sm mr-2' >see more</Text>
              <ChevronRight size={20} color={'black'} />
            </View>
          </View>

          <VehicleElement 
              model="S 500 Sedan"
              rating={4.9}
              transmission="Automatic"
              seats={5}
              fuelType="Diesel"
              pricePerDay={3500}
              imageUri="https://assets.ayoub-dev.xyz/app/dev/car-item.jpg?ts=1"
              onRentPress={() => {}}
            />
            <View className='mt-8' ></View>
            <VehicleElement 
              model="S 500 Sedan"
              rating={4.9}
              transmission="Automatic"
              seats={5}
              fuelType="Diesel"
              pricePerDay={3500}
              imageUri="https://assets.ayoub-dev.xyz/app/car-item-2.jpg?ts=1"
              onRentPress={() => {}}
            />
            <View className='mt-8' ></View>
            <VehicleElement 
              model="S 500 Sedan"
              rating={4.9}
              transmission="Automatic"
              seats={5}
              fuelType="Diesel"
              pricePerDay={3500}
              imageUri="https://assets.ayoub-dev.xyz/app/car-item-3.jpg?ts=1"
              onRentPress={() => {}}
            />
        </View>

      </View>
    </ScrollView>
    
  );
}
