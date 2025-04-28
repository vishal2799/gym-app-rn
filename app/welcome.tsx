import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function WelcomeScreen() {
  const handleGetStarted = () => {
    router.push('/(onboarding)/onboarding');
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-6">
      <Text className="text-3xl font-bold mb-4">Welcome to FitTrack</Text>
      <Text className="text-base text-gray-600 mb-10 text-center">
        Track your workouts, achieve your fitness goals!
      </Text>

      <TouchableOpacity
        onPress={handleGetStarted}
        className="bg-secondary-900 px-6 py-4 rounded-full w-full"
      >
        <Text className="font-ubold text-white text-center text-lg">
          Get Started
        </Text>
      </TouchableOpacity>
    </View>
  );
}
