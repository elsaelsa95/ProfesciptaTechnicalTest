import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function CardOrder() {
  return (
    <View style={styles.container}>
      <Text style={styles.h3}>PROFES</Text>
      <Text style={styles.h3}>50_001</Text>
      <Text style={styles.h3}>24/2/2011</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "grey",
    height: 50,
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
