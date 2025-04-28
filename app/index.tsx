import { Redirect } from "expo-router";

// Fake values (later read from SecureStore)
const isLoggedIn = false;
const onboardingCompleted = false;

export default function Index() {
  if (!onboardingCompleted) {
    return <Redirect href="/welcome" />;
  }

  if (!isLoggedIn) {
    return <Redirect href="/(auth)/login" />;
  }

  return <Redirect href="/(tabs)/home" />;
}
