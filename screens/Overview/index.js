/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ChoreItemList from "./components/ChoreItemList";
import TopNavigation from "./components/TopNavigation";
import BottomNavigation from "./components/BottomNavigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8"
  }
});

const Overview = (props) => {
  const [list, setList] = useState([
    {
      id: 1,
      chore: "Trash",
      name: "Chris",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/16.jpg",
      done: false,
      frequency: "Weekly",
      timeframe: "Apr 27 - May 3"
    },
    {
      id: 2,
      chore: "Counters",
      name: "Marvin",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/10.jpg",
      done: false,
      frequency: "Weekly",
      timeframe: "Apr 27 - May 3"
    },
    {
      id: 3,
      chore: "Vacuum",
      name: "Alfred",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/9.jpg",
      done: false,
      frequency: "Weekly",
      timeframe: "Apr 27 - May 3"
    },
    {
      id: 4,
      chore: "Mop",
      name: "Albert",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/22.jpg",
      done: false,
      frequency: "Monthly",
      timeframe: "Apr 1 - May 1"
    },
    {
      id: 5,
      chore: "Bathrooms",
      name: "Mike",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/27.jpg",
      done: false,
      frequency: "Weekly",
      timeframe: "Apr 27 - May 3"
    },
    {
      id: 6,
      chore: "Trash",
      name: "Chris",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/1.jpg",
      done: false,
      frequency: "Weekly",
      timeframe: "Apr 27 - May 3"
    },
    {
      id: 7,
      chore: "Counters",
      name: "Marvin",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/2.jpg",
      done: false,
      frequency: "Weekly",
      timeframe: "Apr 27 - May 3"
    },
    {
      id: 8,
      chore: "Vacuum",
      name: "Alfred",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/3.jpg",
      done: false,
      frequency: "Monthly",
      timeframe: "Apr 1 - May 1"
    },
    {
      id: 9,
      chore: "Mop",
      name: "Albert",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/4.jpg",
      done: false,
      frequency: "Monthly",
      timeframe: "Apr 1 - May 1"
    },
    {
      id: 10,
      chore: "Dust",
      name: "John",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/27.jpg",
      done: false,
      frequency: "Monthly",
      timeframe: "Apr 1 - May 1"
    }
  ]);
  return (
    <View style={styles.container}>
      <TopNavigation />
      <ChoreItemList list={list} />
      <BottomNavigation />
    </View>
  );
};

export default Overview;
