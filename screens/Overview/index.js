/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ChoreItemList from "./components/ChoreItemList";
import TopNavigation from "./components/TopNavigation";
import BottomNavigation from "./components/BottomNavigation";
import Signout from "./components/SignOut";

const Overview = (props) => {
  const [list, setList] = useState([
    {
      id: 1,
      chore: "Trash",
      name: "Chris",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/16.jpg",
      done: false
    },
    {
      id: 2,
      chore: "Counters",
      name: "Marvin",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/10.jpg",
      done: false
    },
    {
      id: 3,
      chore: "Vacuum",
      name: "Alfred",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/9.jpg",
      done: false
    },
    {
      id: 4,
      chore: "Mop",
      name: "Albert",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/22.jpg",
      done: false
    },
    {
      id: 5,
      chore: "Bathrooms",
      name: "Mike",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/27.jpg",
      done: false
    },
    {
      id: 6,
      chore: "Trash",
      name: "Chris",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/1.jpg",
      done: false
    },
    {
      id: 7,
      chore: "Counters",
      name: "Marvin",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/2.jpg",
      done: false
    },
    {
      id: 8,
      chore: "Vacuum",
      name: "Alfred",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/3.jpg",
      done: false
    },
    {
      id: 9,
      chore: "Mop",
      name: "Albert",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/4.jpg",
      done: false
    }
    // {
    //   id: 10,
    //   chore: "Bathrooms",
    //   name: "Mike",
    //   photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/5.jpg",
    //   done: false
    // },
    // {
    //   id: 11,
    //   chore: "Trash",
    //   name: "Chris",
    //   photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/6.jpg",
    //   done: false
    // },
    // {
    //   id: 12,
    //   chore: "Counters",
    //   name: "Marvin",
    //   photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/7.jpg",
    //   done: false
    // },
    // {
    //   id: 13,
    //   chore: "Vacuum",
    //   name: "Alfred",
    //   photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/8.jpg",
    //   done: false
    // },
    // {
    //   id: 14,
    //   chore: "Mop",
    //   name: "Albert",
    //   photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/17.jpg",
    //   done: false
    // },
    // {
    //   id: 15,
    //   chore: "Bathrooms",
    //   name: "Mike",
    //   photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/18.jpg",
    //   done: false
    // },
    // {
    //   id: 16,
    //   chore: "Trash",
    //   name: "Chris",
    //   photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/11.jpg",
    //   done: false
    // },
    // {
    //   id: 17,
    //   chore: "Counters",
    //   name: "Marvin",
    //   photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/12.jpg",
    //   done: false
    // },
    // {
    //   id: 18,
    //   chore: "Vacuum",
    //   name: "Alfred",
    //   photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/13.jpg",
    //   done: false
    // },
    // {
    //   id: 19,
    //   chore: "Mop",
    //   name: "Albert",
    //   photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/14.jpg",
    //   done: false
    // },
    // {
    //   id: 20,
    //   chore: "Bathrooms",
    //   name: "Mike",
    //   photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/15.jpg",
    //   done: false
    // }
  ]);
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <TopNavigation />
      <ChoreItemList list={list} />
      <BottomNavigation />
    </View>
  );
};

export default Overview;
