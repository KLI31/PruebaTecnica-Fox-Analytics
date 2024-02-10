import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import ReadNews from "../screens/ReadNews";
import SCREEN_NAMES from "../utils/routes";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name={SCREEN_NAMES.onboarding}
          component={OnboardingScreen}
        />
        <Stack.Screen name={SCREEN_NAMES.home} component={HomeScreen} />
        <Stack.Screen name={SCREEN_NAMES.readNews} component={ReadNews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
