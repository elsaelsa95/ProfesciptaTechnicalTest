import React from "react";
import Login from "../screens/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { getToken } from "../utils/token";
import Home from "../screens/Home";

const Tab = createBottomTabNavigator();

function BottomTab() {
  const checkToken = getToken();

  let isSignedIn = false;

  if (checkToken !== null) {
    isSignedIn = true;
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "triangle";
          if (route.name === "Home") {
            iconName = focused ? "md-home" : "md-home-outline";
          } else if (route.name === "Login") {
            iconName = focused ? "md-person" : "md-person-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      })}
    >
      {isSignedIn ? (
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      ) : (
        <Tab.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      )}
    </Tab.Navigator>
  );
}

export default BottomTab;
