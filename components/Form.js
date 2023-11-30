import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Form() {
  const [orderNumber, setOrderNumber] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  return (
    <View style={styles.container}>
      <Text>Sales Information</Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setOrderNumber(e)}
        placeholder="Sales Order Number"
      />
      <TextInput
        style={styles.input}
        onChangeText={(e) => setOrderDate(e)}
        placeholder="Sales Order Date"
      />
      <TextInput
        style={styles.input}
        onChangeText={(e) => setCustomer(e)}
        placeholder="Customer"
      />
      <TextInput
        style={styles.inputMultiline}
        onChangeText={(e) => setAddress(e)}
        placeholder="Address"
        multiline
        numberOfLines={4}
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
