import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Card() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.h2}>Barang 1</Text>
        <Text style={styles.h3left}>2000.000</Text>
      </View>
      <View>
        <Text style={styles.h3}>QTY</Text>
        <Text style={styles.h3}>2</Text>
      </View>
      <View>
        <Text style={styles.h3}>Total</Text>
        <Text style={styles.h3}>4000.000</Text>
      </View>
      <View style={styles.button}>
        <AntDesign name="edit" size={18} color="black" />
        <AntDesign name="delete" size={18} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "grey",
  },
  h2: {
    fontSize: 16,
    fontWeight: "500",
  },
  h3left: {
    fontSize: 10,
    fontWeight: "500",
  },
  h3: {
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 15,
  },
});
