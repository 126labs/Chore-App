/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SignOut from "./components/SignOut";
// import TopNavigation from "./components/TopNavigation";
// import BottomNavigation from "./components/BottomNavigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8"
  }
});

const Settings = (props) => {
  return (
    <View style={styles.container}>
      <SignOut />
    </View>
  );
};

export default Settings;
