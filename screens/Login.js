import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/loginSlice";

import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleLogin = () => {
    try {
      dispatch(
        login({
          username: username,
          password: password,
          grant_type: "client_credentials",
          client_id: "profes-api",
          client_secret: "P@ssw0rd",
        })
      );
      navigation.navigate("Order List");
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <LinearGradient
      start={{ x: 0, y: 0.7 }}
      colors={["#3c8ce7", "#fff"]}
      style={styles.linearGradient}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <View style={styles.content}>
            <FontAwesome5 name="user-alt" size={24} color="black" />
            <TextInput
              style={styles.input}
              onChangeText={(e) => setUsername(e)}
              placeholder="Username"
            />
          </View>
          <View style={styles.content}>
            <FontAwesome5 name="unlock-alt" size={24} color="black" />
            <TextInput
              style={styles.input}
              onChangeText={(e) => setPassword(e)}
              placeholder="Password"
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={{ fontSize: 10, fontWeight: "700", color: "white" }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: "80%",
    height: "50%",
    backgroundColor: "grey",
    opacity: 0.5,
    borderRadius: 10,
    top: "15%",
  },

  title: {
    fontWeight: "700",
    color: "white",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    marginTop: 12,
    borderWidth: 0.5,
    borderRadius: 8,
    width: "90%",
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#3c8ce7",
    padding: 10,
    borderRadius: 10,
    height: 35,
    width: "25%",
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
  },
});
