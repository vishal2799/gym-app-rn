import { View, Text, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function OnboardingScreen() {
  const handleFinishOnboarding = () => {
    // Later you will set onboardingCompleted = true in storage
    router.replace('/(tabs)/home');
  };

  return (
    <View className="flex-1 justify-center items-center bg-white p-6">
      <Text className="text-3xl font-bold mb-4">Onboarding Carousel</Text>
      <Text className="text-base text-gray-600 mb-10 text-center">
        Swipe through onboarding slides here.
      </Text>

      <TouchableOpacity
        onPress={handleFinishOnboarding}
        className="bg-primary px-6 py-4 rounded-full w-full"
      >
        <Text className="text-white text-center text-lg font-semibold">
          Finish
        </Text>
      </TouchableOpacity>
    </View>
  );
}
