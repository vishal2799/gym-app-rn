import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useColorScheme } from 'nativewind'
import * as SecureStore from 'expo-secure-store';

const goals = [
  { id: "1", name: "Lose Weight" },
  { id: "2", name: "Build Muscle" },
  { id: "3", name: "Stay Fit" },
  { id: "4", name: "Improve Endurance" },
];

const GoalScreen = () => {
  // const { setColorScheme } = useColorScheme();
  // setColorScheme("dark");

  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [showError, setShowError] = useState(false);

  const toggleGoal = (goalId: string) => {
    setSelectedGoals((prev) =>
      prev.includes(goalId)
        ? prev.filter((id) => id !== goalId)
        : [...prev, goalId]
    );
  };

  const saveGoals = async () => {
    if (selectedGoals.length === 0) {
      setShowError(true);
      return;
    }
  
    setShowError(false); // Clear error if goals selected
    try {
      await SecureStore.setItemAsync('userGoals', JSON.stringify(selectedGoals));
      router.push('/(account)/level');
    } catch (e) {
      console.error('Failed to save goals:', e);
    }
  };

  return (
    <SafeAreaView className={`bg-white dark:bg-primary flex-1 justify-center items-center`}>
      <View className='w-full p-8 flex-col justify-between h-full'>
        <View>
        <Text className='text-primary dark:text-white text-center font-ubold text-3xl'>What is Your Goal?</Text>
        <Text className='text-primary dark:text-accent text-center font-uregular text-xl mt-5'>You can choose more than one. Don't worry, you can always change it later.</Text>
        </View>

        <View className='w-full items-center'>
        <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const selected = selectedGoals.includes(item.id);
          const activeClasses  = selected ? 'border-2 border-secondary-900 shadow-none' : 'border-transparent'
          return (
            <TouchableOpacity
              onPress={() => toggleGoal(item.id)}
              
              className={`border-2 ${activeClasses} w-full flex-row my-3 rounded-lg bg-white shadow-sm shadow-gray-300 dark:shadow-none dark:bg-gray-800 items-center justify-between p-5`}
            >
              <Text className="text-lg font-uregular text-black dark:text-white">{item.name}</Text>
              <Ionicons
                name={selected ? "checkbox" : "square-outline"}
                size={24}
                color={'#6842FF'}
              />
            </TouchableOpacity>
          );
        }}
      />
      </View>

      {showError && (
        <View>
          <Text className="text-red-500 font-uregular text-md text-center mb-2">
    Please select at least one goal
  </Text>
        </View>
)}


        <View className='flex-row justify-between items-center gap-3'>
        <TouchableOpacity
                            onPress={() => router.back()} // Navigate to onboarding screen
                            className="bg-secondary-100 dark:bg-gray-700 flex-1 py-3 px-5 rounded-full items-center"
                          >
                            <Text className="text-secondary-900 dark:text-white font-ubold text-lg font-semibold">Back</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            // disabled={selectedGoals.length === 0}
                            onPress={() => saveGoals()}
                            className="bg-secondary-900 flex-1 py-3 px-5 rounded-full items-center"
                          >
                            <Text className="text-white font-ubold text-lg font-semibold">Continue</Text>
                          </TouchableOpacity>
        </View>
        

      </View>
    </SafeAreaView>
  )
}

export default GoalScreen