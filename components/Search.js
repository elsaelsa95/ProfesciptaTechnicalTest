import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Search() {
  const [eyword, setKeyword] = useState("");
  const [orderDate, setOrderDate] = useState("");

  return (
    <View style={styles.container}>
      <Text>Search</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setKeyword(e)}
        placeholder="Keyword"
      />
      <TextInput
        style={styles.input}
        onChangeText={(e) => setOrderDate(e)}
        placeholder="Order Date"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginTop: 20,
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: "grey",
  },
  input: {
    height: 40,
    marginTop: 12,
    padding: 10,
    borderWidth: 0.3,
    borderColor: "grey",
    borderRadius: 10,
  },
  inputMultiline: {
    height: 100,
    marginTop: 12,
    padding: 10,
    borderWidth: 0.3,
    borderColor: "grey",
    borderRadius: 10,
  },
});
