import { View, Text } from 'react-native'
import React from 'react'
import { User } from 'lucide-react-native'

const ProfileTab = () => {

  const accountOptions = [
    {
      title: 'Profile',
      icon: User,
    },
    {
      title: 'Profile',
      icon: User,
    },
    {
      title: 'Profile',
      icon: User,
    },
    {
      title: 'Profile',
      icon: User,
    },
    {
      title: 'Profile',
      icon: User,
    },
  ]


  return (
    <View className='bg-white flex-1 pt-6 pb-2' >
      <View className='w-full h-1/3 space-y-5' >
        <View className='flex-row justify-center items-center' >
          <View className='w-28 h-28 bg-gray-200 rounded-full' >

            <View className='absolute bottom-0 right-0 w-7 h-7 rounded-full bg-green-500 border-[3px] border-gray-50' >  </View>
          </View>
        </View>
        <View className='flex-row justify-center items-center' >
          <Text className='text-lg font-semibold' >John Doe</Text>
        </View>
      </View>

      <View className='px-8' >

        <View className='flex-col' >
          <Text className='text-black text-xl font-semibold mb-4' >
            Account
          </Text>

          <View className='bg-slate-200 rounded-3xl p-6'  >

            {
              accountOptions.map((option, index) => {
                const Icon = option.icon
                return (
                  <View key={index} className='flex-row py-4'  >
                    <Icon size={24} color='#000'  />
                    <View className='flex-col w-full px-4' >

                      <Text className='text-xl font-medium' >
                        {option.title}
                      </Text>
                      <View className='rounded-full h-1 bg-slate-50 w-[75%]' ></View>
                    </View>
                  </View>
                )
              })
            }
          </View>



        </View>
      </View>

    </View>
  )
}

export default ProfileTab