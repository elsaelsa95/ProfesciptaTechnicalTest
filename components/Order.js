import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Order() {
  return (
    <View style={styles.container}>
      <Text style={styles.h3}> Order Summary</Text>
      <View style={styles.content}>
        <Text style={styles.h3}>Sub total :</Text>
        <Text style={styles.h3}>12.000.000</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.h3}>Total Product :</Text>
        <Text style={styles.h3}>6 Products</Text>
      </View>
      <View style={styles.buttonFlex}>
        <TouchableOpacity style={styles.button}>
          <Text
            style={{
              textAlign: "center",
              fontSize: 10,
              fontWeight: "700",
              color: "white",
            }}
          >
            Process Item
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            padding: 10,
            borderRadius: 10,
            height: 35,
            width: 100,
            borderColor: "black",
            borderWidth: 0.3,
          }}
        >
          <Text
            style={{ textAlign: "center", fontSize: 10, fontWeight: "700" }}
          >
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "grey",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  h3: {
    fontSize: 10,
    fontWeight: "700",
  },
  buttonFlex: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 15,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "olive",
    padding: 10,
    borderRadius: 10,
    height: 35,
    width: 100,
  },
});
