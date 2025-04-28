import React, { useEffect, useState } from "react";
import { View, Button } from "react-native";
import CustomSwiper from "@/components/CustomSwiper";
import { SafeAreaView } from "react-native-safe-area-context";

const OnboardingScreen = () => {
  const [isOnboardingCompleted, setIsOnboardingCompleted] = useState(false);

  // useEffect(() => {
  //   const checkOnboardingStatus = async () => {
  //     const completed = await SecureStore.getItemAsync("onboardingCompleted");
  //     if (completed === "true") {
  //       setIsOnboardingCompleted(true);
  //     }
  //   };

  //   checkOnboardingStatus();
  // }, []);

  const handleDone = async () => {
    // await SecureStore.setItemAsync("onboardingCompleted", "true");
    // navigation.navigate("Home"); // Change to your home screen route
  };

  if (isOnboardingCompleted) {
    // If onboarding is already completed, directly navigate to home
    return <View className="flex-1 items-center justify-center" />;
  }

  return (
<>  
      <CustomSwiper />
      {/* <Button title="Get Started" onPress={handleDone} /> */}
      </>
  );
};

export default OnboardingScreen;
