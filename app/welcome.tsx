import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

export default function WelcomeScreen() {
  const handleGetStarted = () => {
    router.push('/(onboarding)/onboarding');
  };

  return (
    <>
    <ImageBackground
      source={require('../assets/images/gym1.jpg')} // Replace with your background image
      className="flex-1 justify-center items-center bg-cover"
      style={{ width: '100%', height: '100%' }} // Ensure it covers the full screen
    >
      <View
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.4)', // Semi-transparent overlay
    }}
  />
      <SafeAreaView className="flex-1 justify-end items-start p-4">
        

        {/* Welcome Message */}
        <Text className="text-white text-3xl font-ubold text-center mb-4">
          Welcome to
        </Text>

        <Text className="text-white text-6xl font-ubold text-center mb-5">
          GoFit
        </Text>

        {/* Description */}
        <Text className="font-uregular text-white text-xl mb-8">
          Your fitness journey starts here. Let's help you reach your goals.
        </Text>

        {/* Get Started Button */}
        <TouchableOpacity
          onPress={() => router.navigate('/(onboarding)/onboarding')} // Navigate to onboarding screen
          className="bg-secondary-900 py-3 px-5 rounded-full w-full max-w-xs items-center"
        >
          <Text className="text-white font-ubold text-lg font-semibold">Get Started</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
          <StatusBar style="light" />
    
    </>
  );
}
