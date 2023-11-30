import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { clearToken, getToken } from "../utils/token";
import { useNavigation } from "@react-navigation/native";

export default function Navbar() {
  const navigation = useNavigation();
  const handleLogout = () => {
    clearToken();
    navigation.navigate("Login");
  };

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 10,
      }}
    >
      <Image
        source={{
          uri: "https://global.ac.id/wp-content/uploads/2015/04/speaker-3-v2.jpg",
        }}
        style={{
          width: 50,
          height: 50,
          borderRadius: 100,
        }}
      />
      <TouchableOpacity onPress={handleLogout}>
        <Text style={{ color: "white" }}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
