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
    paddingTop: 120,
    paddingLeft: 20,
    paddingRight: 20
  },
  listContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

const ChoreItemList = ({ list }) => {

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.listContainer}>
          {list.map((listItem, index) => (
            <ChoreItem style={styles.item} item={listItem} id={index} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default ChoreItemList;
