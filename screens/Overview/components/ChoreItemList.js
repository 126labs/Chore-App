/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import {
  StyleSheet, Text, View, Image, ScrollView
} from "react-native";
// import styles from "../styles";
import ChoreItem from "./ChoreItem";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  listContainer: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

const ChoreItemList = ({ list }) => {

  return (
    <ScrollView>
      <View>
        <View style={styles.listContainer}>
          {list.map((listItem, index) => (
            <ChoreItem style={styles.item} item={listItem} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default ChoreItemList;
