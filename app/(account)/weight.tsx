import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { setItem } from '@/utils/storage'
import {Picker} from '@react-native-picker/picker';


const WeightScreen = () => {
  const [weight, setWeight] = useState("50");

  const handleContinue = async () => {
    if (!weight) {
      alert("Please select a weight first.");
      return;
    }
  
    try {
      await setItem("weight", weight);
      router.push("/(account)/height"); // 👈 Navigate to next step
    } catch (error) {
      console.error("Failed to save weight", error);
    }
  };

  return (
    <SafeAreaView className={`bg-white dark:bg-primary flex-1 justify-center items-center`}>
      <View className='w-full p-8 flex-col justify-between h-full'>
        <View>
        <Text className='text-primary dark:text-white text-center font-ubold text-3xl'>What is Your Weight?</Text>
        <Text className='text-primary dark:text-accent text-center font-uregular text-xl mt-5'>Weight in Kg. Don't worry, you can always change it later.</Text>
        </View>

        <View className='w-full items-center'>
        <Picker
        selectedValue={weight}
        onValueChange={(itemValue) => setWeight(itemValue)}
        style={{ width: 200, height: 250 }} // must give height for iOS!
      >
        {Array.from({ length: 100 }, (_, i) => {
          const value = (i).toString();
          return <Picker.Item key={value} label={value} value={value} />;
        })}
      </Picker>
      </View>

        <View className='flex-row justify-between items-center gap-3'>
        <TouchableOpacity
                            onPress={() => router.back()} // Navigate to onboarding screen
                            className="bg-secondary-100 dark:bg-gray-700 flex-1 py-3 px-5 rounded-full items-center"
                          >
                            <Text className="text-secondary-900 dark:text-white font-ubold text-lg font-semibold">Back</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={handleContinue} // Navigate to onboarding screen
                            className="bg-secondary-900 flex-1 py-3 px-5 rounded-full items-center"
                          >
                            <Text className="text-white font-ubold text-lg font-semibold">Continue</Text>
                          </TouchableOpacity>
        </View>
        

      </View>
    </SafeAreaView>
  )
}

export default WeightScreen