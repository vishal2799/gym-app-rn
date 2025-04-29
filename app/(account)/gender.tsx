import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { setItem } from '@/utils/storage'
import { colorScheme, useColorScheme } from "nativewind";


const GenderScreen = () => {
  // Or as a hook
  // const { setColorScheme } = useColorScheme();
  // setColorScheme("system");
  const [selectedGender, setSelectedGender] = useState<string | null>('Male');
  const genders = [{name:"Male", icon: 'male'}, {name: "Female", icon: 'female'}];

  const handleContinue = async () => {
    if (!selectedGender) {
      alert("Please select a gender first.");
      return;
    }
  
    try {
      await setItem("gender", selectedGender);
      router.push("/(account)/age"); // 👈 Navigate to next step
    } catch (error) {
      console.error("Failed to save gender", error);
    }
  };

  return (
    <SafeAreaView className={`bg-white dark:bg-primary flex-1 justify-center items-center`}>
      <View className='w-full p-8 flex-col justify-between h-full'>
        <View>
        <Text className='text-primary dark:text-white text-center font-ubold text-3xl'>Tell Us About Yourself</Text>
        <Text className='text-primary dark:text-white text-center font-uregular text-xl mt-5'>To give you a better experience and results we need to know your gender</Text>
        </View>

        <View className='w-full items-center'>
        {genders.map((gender, index) => (
        <TouchableOpacity
        key={index}
        onPress={() => setSelectedGender(gender.name)}
        className={`w-36 aspect-square rounded-full mb-8 mx-2 items-center justify-center text-white ${
          selectedGender === gender.name ? "bg-secondary-900" : "bg-gray-300 dark:bg-gray-600"
        }`}
      >
        <Ionicons name={gender.icon} size={40} color="white" />
        <Text className="text-center text-white font-bold text-base mt-4">{gender.name}</Text>
      </TouchableOpacity>
      
        ))}
      </View>

      {selectedGender && (
        
        <TouchableOpacity
                            onPress={handleContinue} // Navigate to onboarding screen
                            className="bg-secondary-900 py-3 px-5 rounded-full w-full items-center"
                          >
                            <Text className="text-white font-ubold text-lg font-semibold">Continue</Text>
                          </TouchableOpacity>)
}
      </View>
    </SafeAreaView>
  )
}

export default GenderScreen