import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colorsScheme } from '../ui/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';

interface VehicleElementProps {
  brand?: string;
  model: string;
  rating: number;
  transmission: string;
  seats: number;
  fuelType: string;
  pricePerDay: number;
  imageUri: string;
  logoUri?: string;
  onRentPress: () => void;
}
const VehicleElement: React.FC<VehicleElementProps> = ({
  brand = 'Mercedes',
  model,
  rating,
  transmission,
  seats,
  fuelType,
  pricePerDay,
  imageUri,
  logoUri = 'https://assets.ayoub-dev.xyz/app/m-benz.png',
  onRentPress
}) => {
  return (
    
    <View className="bg-slate-100 rounded-2xl overflow-hidden" style={{ aspectRatio: 1.24 / 1 }} >

      <View className='w-full h-full flex-col pb-4' >


          <View className='overflow-hidden w-full flex-1 p-3' >
            <View className='flex-1' >
              <BlurView
                tint='dark'
                experimentalBlurMethod="dimezisBlurView"  intensity={20} className='w-[36%] h-full z-10 rounded-xl overflow-hidden' >
                <View className="flex-col justify-between py-5 px-3">
                  <View className="flex-col justify-center">
                    <View className='w-14 p-3 bg-slate-50 aspect-square overflow-hidden justify-center items-center rounded-tl-2xl rounded-br-2xl'   >

                      <Image
                        source={{ uri: logoUri }}
                        className="w-full aspect-square"
                      />
                    </View>
                    <View className="ml-2 mt-2">
                      <Text className="text-lg text-slate-100 font-bold">{model}</Text>
                      <View className="flex-row items-center">
                        <Text className="text-yellow-500 text-xl ">★</Text>
                        <Text className="ml-1 text-white font-semibold">{"  "}{rating}</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </BlurView>

              <Image
                source={{ uri: imageUri }}
                className='rounded-xl border-2 border-slate-300 '
                style={{position:'absolute' ,  width: '100%', height: '100%', }} />
            </View>

          </View>
        {/**
         * The quick specs section, make it a list dumbass 
         */}
        <View className="flex-row justify-between mt-2">
          <View className="items-center flex-1 px-2 py-1 border-r-2 border-slate-200 mx-1">
            <Text className="text-gray-500 text-sm">{transmission}</Text>
          </View>
          <View className="items-center flex-1 px-2 py-1 border-r-2 border-slate-200 mx-1">
            <Text className="text-gray-500 text-sm">{seats} seats</Text>
          </View>
          <View className="items-center flex-1 px-2 py-1  mx-1">
            <Text className="text-gray-500 text-sm">{fuelType}</Text>
          </View>
        </View>


        {/**
         * Price and rent button 
         
         */
        }
        <View className="flex-row justify-between items-center mt-2 px-5">
          <View>
            <Text className="text-2xl font-bold">Đ{pricePerDay}.00</Text>
            <Text className="text-gray-500 text-xs">Day</Text>
          </View>
          <TouchableOpacity
            style={{ backgroundColor: colorsScheme.primary }}
            className=" rounded-xl px-6 py-2"
            onPress={onRentPress}
          >
            <Text className="text-white font-medium">Rent Now</Text>
          </TouchableOpacity>
        </View>

      </View>

      


    </View>
  );
};

export default VehicleElement





