import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    borderColor: "red",
    borderBottomWidth: 1,
    borderTopWidth: 1
  }
});

const Header = () => (
  <View style={styles.root}>
    <Text>Top</Text>
  </View>
);

export default Header;
