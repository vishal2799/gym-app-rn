import { useFonts } from "expo-font";
import "../global.css"

import {  Slot, SplashScreen } from "expo-router";
import { useEffect} from "react";
import { Urbanist_400Regular, Urbanist_700Bold } from "@expo-google-fonts/urbanist";


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Urbanist_400Regular,
    Urbanist_700Bold
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Slot />;
}
