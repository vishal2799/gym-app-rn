import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const AgeScreen = () => {
  return (
        <SafeAreaView className='flex-1 justify-center items-center'>
            <View>
                <Text className='text-primary font-ubold'>Age</Text>
            </View>
        </SafeAreaView>
  )
}

export default AgeScreen