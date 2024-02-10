import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigator from "./navigation/stackNavigation";
import { useFonts } from "expo-font";
import { customFonts } from "./utils/typography";

export default function App() {
  const [fontsLoaded] = useFonts(customFonts);

  if (!fontsLoaded) {
    return null;
  }

  return <StackNavigator />;
}
