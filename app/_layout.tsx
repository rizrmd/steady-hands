import {
  Lora_400Regular,
  Lora_700Bold,
  useFonts as useLoraFonts,
} from "@expo-google-fonts/lora";
import {
  Mulish_400Regular,
  Mulish_700Bold,
  useFonts as useMulishFonts,
} from "@expo-google-fonts/mulish";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loraLoaded] = useLoraFonts({
    Lora_400Regular,
    Lora_700Bold,
  });

  const [mulishLoaded] = useMulishFonts({
    Mulish_400Regular,
    Mulish_700Bold,
  });

  useEffect(() => {
    if (loraLoaded && mulishLoaded) {
      SplashScreen.hideAsync();
    }
  }, [loraLoaded, mulishLoaded]);

  if (!loraLoaded || !mulishLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}></Stack>
      {/* <StatusBar style="auto" /> */}
    </ThemeProvider>
  );
}
