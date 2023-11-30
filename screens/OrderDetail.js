import React, { useEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Card from "../components/Card";
import Form from "../components/Form";
import Order from "../components/Order";
import { Ionicons } from "@expo/vector-icons";

export default function OrderDetail() {
  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image></Image>
            <Ionicons name="ios-menu" size={24} color="black" />
          </View>
          <Text style={styles.h1}>Sales Order Input</Text>
          <View style={styles.content}>
            <Form />
            <View style={styles.header}>
              <Text style={styles.h2}>Detail Sales</Text>
              <View style={[{ margin: 10 }]}>
                <TouchableOpacity style={styles.button}>
                  <Text
                    style={{ fontSize: 10, fontWeight: "700", color: "white" }}
                  >
                    Add Item
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <Card />
            <Card />
            <Card />
            <Order />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    backgroundColor: "olive",
  },
  h1: {
    fontSize: 25,
    fontWeight: "700",
    color: "white",
    padding: 10,
  },
  h2: {
    fontSize: 16,
    fontWeight: "500",
    padding: 10,
  },
  content: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "whitesmoke",
    padding: 0,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "olive",
    padding: 10,
    borderRadius: 10,
    height: 35,
  },
});
