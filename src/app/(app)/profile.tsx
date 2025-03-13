import { View, Text, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import { ChevronRight, User, User2Icon } from 'lucide-react-native'



const ProfileTab = () => {

  const sh = Dimensions.get('screen').height

  const accountOptions = [
    {
      title: 'Personal information',
      icon: User2Icon,
    },
    {
      title: 'Documents',
      icon: User,
    },
    {
      title: 'Reservations',
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
    <ScrollView contentContainerClassName='bg-white pt-6 pb-24' contentContainerStyle={{paddingBottom: 150}} className='' >
      <View className='flex-row' style={{height: sh / 4}} >

        <View className='flex-1 h-1/3 space-y-5' >
          <View className='flex-row justify-center items-center' >
            <View className='w-28 h-28 bg-gray-200 rounded-full' >

              <View className='absolute bottom-0 right-0 w-7 h-7 rounded-full bg-green-500 border-[3px] border-gray-50' >  </View>
            </View>
          </View>
          <View className='flex-row justify-center items-center mt-2' >
            <Text className='text-lg font-semibold' >Customer</Text>
          </View>
        </View>

        <View className='flex-1 flex-col py-4' >
          <Text className='text-slate-800 text-xl font-medium mb-2' >Belmiloud Ayoub</Text>
          
          <Text className='text-slate-800 text-xl font-medium mb-2'> @chibadev  </Text>
          <Text className='text-slate-800 text-xl font-medium'> @7 794 899 93  </Text>

        </View>
      </View>

      {
        /** 
         * End of Profile Header
         */
        
      }

      <View className='px-8' >

        <View className='flex-col' >
          <Text className='text-black text-xl font-semibold mb-4' >
            Account
          </Text>

          <View className='bg-slate-100 rounded-3xl p-6'  >

            {
              accountOptions.map((option, index) => {
                const Icon = option.icon
                return (
                  <View key={index} className='flex-row py-4 px-3'  >
                    <Icon size={22} color='#464646'  />
                    <View className='flex-col flex-1 ps-6 pe-2' >

                      <Text className='text-xl font-medium' >
                        {option.title}
                      </Text>
                      {!(index === accountOptions.length - 1) &&  <View className='rounded-full h-1 bg-slate-200 w-full mt-2.5' ></View>}
                    </View>

                    <ChevronRight size={22} color='#5f5f5f'  />
                  </View>
                )
              })
            }
          </View>
        </View>



        <View className='flex-col' >
          <Text className='text-black text-xl font-semibold mb-4' >
            Account
          </Text>

          <View className='bg-slate-100 rounded-3xl p-6'  >

            {
              accountOptions.map((option, index) => {
                const Icon = option.icon
                return (
                  <View key={index} className='flex-row py-4 px-3'  >
                    <Icon size={22} color='#464646'  />
                    <View className='flex-col flex-1 ps-6 pe-2' >

                      <Text className='text-xl font-medium' >
                        {option.title}
                      </Text>
                      <View className='rounded-full h-1 bg-slate-200 w-full mt-2.5' ></View>
                    </View>

                    <ChevronRight size={22} color='#5f5f5f'  />
                  </View>
                )
              })
            }
          </View>
        </View>
        <View className='flex-col' >
          <Text className='text-black text-xl font-semibold mb-4' >
            Account
          </Text>

          <View className='bg-slate-100 rounded-3xl p-6'  >

            {
              accountOptions.map((option, index) => {
                const Icon = option.icon
                return (
                  <View key={index} className='flex-row py-4 px-3'  >
                    <Icon size={22} color='#464646'  />
                    <View className='flex-col flex-1 ps-6 pe-2' >

                      <Text className='text-xl font-medium' >
                        {option.title}
                      </Text>
                      <View className='rounded-full h-1 bg-slate-200 w-full mt-2.5' ></View>
                    </View>

                    <ChevronRight size={22} color='#5f5f5f'  />
                  </View>
                )
              })
            }
          </View>
        </View>
      </View>

    </ScrollView>
  )
}

export default ProfileTab