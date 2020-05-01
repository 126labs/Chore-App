/* eslint-disable no-unused-vars */
import React from "react";
import {
  StyleSheet, View, Image, ScrollView
} from "react-native";
// import styles from "../styles";
import ChoreItem from "./ChoreItem";

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center"
  }
});

const ChoreItemList = ({ list }) => (
  <ScrollView>
    <View style={styles.container}>
      {list.map((listItem) => (
        <ChoreItem style={styles.item} item={listItem} key={listItem.id} />
      ))}
    </View>
  </ScrollView>
);

export default ChoreItemList;
