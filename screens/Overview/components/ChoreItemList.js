/* eslint-disable no-unused-vars */
import React, { Component, useState } from "react";
import {
  StyleSheet, Text, View, Image, ScrollView
} from "react-native";
import styles from "../styles";
import ChoreItem from "./ChoreItem";

const ChoreItemList = (props) => (
  <ScrollView>
    <View style={styles.listContainer}>
      <ChoreItem style={styles.item} />
      <ChoreItem style={styles.item} />
    </View>
  </ScrollView>
);

export default ChoreItemList;
