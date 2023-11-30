import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/loginSlice";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

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
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>Username</Text>
      <TextInput style={styles.input} onChangeText={(e) => setUsername(e)} />
      <Text style={{ fontWeight: "bold" }}>Password</Text>
      <TextInput style={styles.input} onChangeText={(e) => setPassword(e)} />
      <Button onPress={handleLogin} title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    width: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
  },
});
