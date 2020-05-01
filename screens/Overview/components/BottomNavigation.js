import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Octicons";
import SignOut from "../../Settings/components/SignOut";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
    backgroundColor: "#3f3f6f",
    alignItems: "center",
    maxHeight: 80
  },
  buttons: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%"
  }
});

const BottomNavigation = () => (
  <View style={styles.container}>
    <View style={styles.buttons}>
      <View>
        <Icon name="list-unordered" size={25} color="white" />
      </View>

      <View>
        <Icon name="calendar" size={25} color="white" />
      </View>

      <View>
        <Icon name="person" size={25} color="white" />
      </View>
    </View>
  </View>
);

export default BottomNavigation;
