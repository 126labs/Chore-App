/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ChoreItemList from "./components/ChoreItemList";
import TopNavigation from "./components/TopNavigation";
import BottomNavigation from "./components/BottomNavigation";

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
    },
    {
      chore: "Trash",
      name: "Chris",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/1.jpg",
      done: false
    },
    {
      chore: "Counters",
      name: "Marvin",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/2.jpg",
      done: false
    },
    {
      chore: "Vacuum",
      name: "Alfred",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/3.jpg",
      done: false
    },
    {
      chore: "Mop",
      name: "Albert",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/4.jpg",
      done: false
    },
    {
      chore: "Bathrooms",
      name: "Mike",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/5.jpg",
      done: false
    },
    {
      chore: "Trash",
      name: "Chris",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/6.jpg",
      done: false
    },
    {
      chore: "Counters",
      name: "Marvin",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/7.jpg",
      done: false
    },
    {
      chore: "Vacuum",
      name: "Alfred",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/8.jpg",
      done: false
    },
    {
      chore: "Mop",
      name: "Albert",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/17.jpg",
      done: false
    },
    {
      chore: "Bathrooms",
      name: "Mike",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/18.jpg",
      done: false
    },
    {
      chore: "Trash",
      name: "Chris",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/11.jpg",
      done: false
    },
    {
      chore: "Counters",
      name: "Marvin",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/12.jpg",
      done: false
    },
    {
      chore: "Vacuum",
      name: "Alfred",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/13.jpg",
      done: false
    },
    {
      chore: "Mop",
      name: "Albert",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/14.jpg",
      done: false
    },
    {
      chore: "Bathrooms",
      name: "Mike",
      photo: "https://choreappphotos.s3-us-west-1.amazonaws.com/15.jpg",
      done: false
    },
  ]);
  return (
    <ChoreItemList list={list} />
  );
};

export default Overview;
