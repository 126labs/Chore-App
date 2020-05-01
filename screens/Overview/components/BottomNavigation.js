import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import SignOut from "./SignOut";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    paddingTop: 10,
    alignItems: "center",
    backgroundColor: "#12181d"
  },

  left: {
    flex: 1

  },

  right: {
    flex: 1
  }
});

const BottomNavigation = () => (
  <View style={styles.root}>
    <View style={styles.left}><SignOut /></View>

    <View style={styles.left}><Button buttonStyle={{ backgroundColor: "#12181d" }} icon={<Icon name="user" size={25} color="white" />} /></View>

    <View style={styles.left}><Button buttonStyle={{ backgroundColor: "#12181d" }} icon={<Icon name="user" size={25} color="white" />} /></View>

    <View style={styles.right}><Button buttonStyle={{ backgroundColor: "#12181d" }} icon={<Icon name="cog" size={25} color="white" />} /></View>
  </View>
);

export default BottomNavigation;
