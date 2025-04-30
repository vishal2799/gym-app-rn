import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'
import * as SecureStore from 'expo-secure-store';
import { setItem } from '@/utils/storage'

const goals = [
  { id: "1", name: "Lose Weight" },
  { id: "2", name: "Build Muscle" },
  { id: "3", name: "Stay Fit" },
  { id: "4", name: "Improve Endurance" },
];

const LevelScreen = () => {
//   const { setColorScheme } = useColorScheme();
//   setColorScheme("light");

  const [selectedLevel, setSelectedLevel] = useState<string | null>('Beginner');
    const levels = [{name:"Beginner", icon: 'male'}, {name: "Intermediate", icon: 'female'}, {name: "Advanced", icon: 'female'}];
  
    const handleContinue = async () => {
      if (!selectedLevel) {
        alert("Please select a level first.");
        return;
      }
    
      try {
        await setItem("level", selectedLevel);
        router.push("/(account)/fill"); 
      } catch (error) {
        console.error("Failed to save level", error);
      }
    };

  return (
    <SafeAreaView className={`bg-white dark:bg-primary flex-1 justify-center items-center`}>
      <View className='w-full p-8 flex-col justify-between h-full'>
        <View>
        <Text className='text-primary dark:text-white text-center font-ubold text-3xl'>Physical Activity Level?</Text>
        <Text className='text-primary dark:text-accent text-center font-uregular text-xl mt-5'>Choose your regular activity level. This will help us to personalize plans for you.</Text>
        </View>

        <View className='w-full items-center'>
        
      {levels.map((level, index) => (
              <TouchableOpacity
              key={index}
              onPress={() => setSelectedLevel(level.name)}
              className={`w-full p-5 rounded-md my-2 mx-2 items-center justify-center text-white ${
                selectedLevel === level.name ? "bg-secondary-900 shadow-none" : "shadow-md shadow-gray-200 dark:shadow-none dark:bg-gray-800"
              }`}
            >
              <Text className={`text-center ${selectedLevel === level.name ? "text-white" : "text-primary"} dark:text-white font-ubold text-base`}>{level.name}</Text>
            </TouchableOpacity>
            
              ))}
      </View>


        <View className='flex-row justify-between items-center gap-3'>
        <TouchableOpacity
                            onPress={() => router.back()} // Navigate to onboarding screen
                            className="bg-secondary-100 dark:bg-gray-700 flex-1 py-3 px-5 rounded-full items-center"
                          >
                            <Text className="text-secondary-900 dark:text-white font-ubold text-lg font-semibold">Back</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            // disabled={selectedGoals.length === 0}
                            onPress={handleContinue}
                            className="bg-secondary-900 flex-1 py-3 px-5 rounded-full items-center"
                          >
                            <Text className="text-white font-ubold text-lg font-semibold">Continue</Text>
                          </TouchableOpacity>
        </View>
        

      </View>
    </SafeAreaView>
  )
}

export default LevelScreen