/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ChoreItemList from "./components/ChoreItemList";
import TopNavigation from "./components/TopNavigation";
import BottomNavigation from "./components/BottomNavigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  }
});

const Overview = (props) => {
  const [list, setList] = useState([
    {
      chore: "Trash",
      name: "Chris",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/16.jpg",
      done: false
    },
    {
      chore: "Counters",
      name: "Marvin",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/10.jpg",
      done: false
    },
    {
      chore: "Vacuum",
      name: "Alfred",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/9.jpg",
      done: false
    },
    {
      chore: "Mop",
      name: "Albert",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/22.jpg",
      done: false
    },
    {
      chore: "Bathrooms",
      name: "Mike",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/27.jpg",
      done: false
    }
  ]);
  return (
    <View style={styles.container}>
      <ChoreItemList list={list} />
    </View>
  );
};

export default Overview;
