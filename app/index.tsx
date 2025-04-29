import { getItem } from "@/utils/storage";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";


export default function Index() {
  const [onboardingCompleted, setOnboardingCompleted] = useState<boolean | null>(null);
  const [isAccountSetup, setIsAccountSetup] = useState<boolean | null>(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(false);

  useEffect(() => {
    async function loadData() {
      const onboarding = await getItem('onboardingCompleted');
      // setOnboardingCompleted(onboarding === 'true');
      setOnboardingCompleted(false);
    }

    loadData();

    // setTimeout(() => {
    //   loadData()
    // }, 2000);
  }, []);

  if (onboardingCompleted === null || isAccountSetup === null || isLoggedIn === null) {
    // Loading state
    return (
      <View className="flex-1 items-center justify-center bg-white">
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (!onboardingCompleted) {
    return <Redirect href="/welcome" />;
  }

  if (!isAccountSetup) {
    return <Redirect href="/(account)/gender" />;
  }

  if (!isLoggedIn) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Redirect href="/(tabs)/home" />;
}
