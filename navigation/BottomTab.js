import React, { useEffect, useState } from "react";
import Login from "../screens/Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { getToken } from "../utils/token";
import OrderList from "../screens/OrderList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OrderDetail from "../screens/OrderDetail";

const Tab = createBottomTabNavigator();

function BottomTab() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const token = getToken();
    token == null ? setIsSignedIn(false) : setIsSignedIn(true);
  }, []);

  const Stack = createNativeStackNavigator();

  return (
    // <Tab.Navigator
    //   screenOptions={({ route }) => ({
    //     tabBarIcon: ({ focused, color, size }) => {
    //       let iconName = "triangle";
    //       if (route.name === "OrderList") {
    //         iconName = focused ? "md-home" : "md-home-outline";
    //       } else if (route.name === "Login") {
    //         iconName = focused ? "md-person" : "md-person-outline";
    //       }
    //       return <Ionicons name={iconName} size={size} color={color} />;
    //     },
    //     tabBarActiveTintColor: "black",
    //     tabBarInactiveTintColor: "gray",
    //   })}
    // >
    //   {isSignedIn ? (
    //     <Tab.Screen
    //       name="OrderList"
    //       component={OrderList}
    //       // options={{ headerShown: false }}
    //     />
    //   ) : (
    //     <Tab.Screen
    //       name="Login"
    //       component={Login}
    //       // options={{ headerShown: false }}
    //     />
    //   )}
    // </Tab.Navigator>
    <Stack.Navigator>
      <Stack.Screen name="Order List" component={OrderList} />
      <Stack.Screen name="Order Detail" component={OrderDetail} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default BottomTab;
