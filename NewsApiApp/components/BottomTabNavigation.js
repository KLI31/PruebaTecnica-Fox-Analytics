import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SCREEN_NAMES from "../utils/routes";
import SearchNews from "../screens/SearchNews";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../utils/colors";
import { typography } from "../utils/typography";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontFamily: typography.fontFamily["hind-semibold"],
                color: focused ? colors.primary : "grey",
                fontSize: 14,
              }}
            >
              Inicio
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <AntDesign
                  name="home"
                  size={24}
                  color={focused ? colors.primary : "grey"}
                />
              </View>
            );
          },
        }}
        name="Principal"
        component={HomeScreen}
      />
      <Tab.Screen
        name={SCREEN_NAMES.searchNews}
        component={SearchNews}
        options={{
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontFamily: typography.fontFamily["hind-semibold"],
                fontSize: 14,
                color: focused ? colors.primary : "grey",
              }}
            >
              Buscar
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <AntDesign
                  name="search1"
                  size={24}
                  color={focused ? colors.primary : "grey"}
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
