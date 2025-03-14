import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colorsScheme } from '../ui/colors';

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
const VehicleElement : React.FC<VehicleElementProps> = ({ 
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
    <View className="bg-slate-100 rounded-3xl p-4 mb-4">
      {/* Top section with brand logo and car details */}
      <View className="flex-row justify-between mb-2">
        <View className="flex-row items-center">
          <Image
            source={{ uri: logoUri }}
            className="w-10 h-10"
          />
          <View className="ml-2">
            <Text className="text-lg font-bold">{model}</Text>
            <View className="flex-row items-center">
              <Text className="text-yellow-500">★</Text>
              <Text className="ml-1">{rating}</Text>
            </View>
          </View>
        </View>
      </View>
      
      {/* Car image */}
      <View className='flex-row w-full' >
        <View className='flex-1 ' ></View>

        <Image
          source={{ uri: imageUri }}
          className="flex-[2] h-36 rounded-lg"
          resizeMode="contain"
        />
      </View>
      
      {/* Car specs */}
      <View className="flex-row justify-between mt-2">
        <View className="items-center flex-1 px-2 py-1 border-r-2 border-slate-400 mx-1">
          <Text className="text-gray-500 text-sm">{transmission}</Text>
        </View>
        <View className="items-center flex-1 px-2 py-1 border-r-2 border-slate-400 mx-1">
          <Text className="text-gray-500 text-sm">{seats} seats</Text>
        </View>
        <View className="items-center flex-1 px-2 py-1  mx-1">
          <Text className="text-gray-500 text-sm">{fuelType}</Text>
        </View>
      </View>
      
      {/* Price and rent button */}
      <View className="flex-row justify-between items-center mt-4">
        <View>
          <Text className="text-2xl font-bold">Đ{pricePerDay}</Text>
          <Text className="text-gray-500 text-xs">Day</Text>
        </View>
        <TouchableOpacity 
          style={{backgroundColor: colorsScheme.primary}}
          className=" rounded-xl px-7 py-2.5"
          onPress={onRentPress}
        >
          <Text className="text-white font-medium">Rent Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VehicleElement





