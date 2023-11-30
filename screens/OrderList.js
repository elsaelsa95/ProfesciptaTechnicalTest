import React, { useEffect } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import CardOrder from "../components/CardOrder";
import { useDispatch, useSelector } from "react-redux";
import { getOrderList, orderSelector } from "../features/orderSlice";
import { useNavigation } from "@react-navigation/native";

export default function OrderList() {
  const dispatch = useDispatch();
  const orders = useSelector(orderSelector.selectAll);

  useEffect(() => {
    dispatch(getOrderList());
  }, [dispatch]);
  console.log(orders, "ooo");

  const navigation = useNavigation();
  const handleDetail = () => {
    navigation.navigate("Order Detail");
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Navbar />
          <Text style={styles.h1}>Sales Order List</Text>
          <View style={styles.content}>
            <Search />
            <View style={styles.header}>
              <Text style={styles.h2}>Order List</Text>
              <Text style={styles.h3}>Total Item: 50</Text>
            </View>
            <View style={[{ margin: 10 }]}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Add</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleDetail}>
              <CardOrder />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDetail}>
              <CardOrder />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDetail}>
              <CardOrder />
            </TouchableOpacity>
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
  h3: {
    fontSize: 12,
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
    width: "20%",
  },
  text: {
    fontSize: 10,
    fontWeight: "700",
    color: "white",
    textAlign: "center",
  },
});
