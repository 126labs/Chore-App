import React from "react";
import {
  StyleSheet, Text, View, StatusBar
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
import Settings from "../../Settings/";
import { signOutStart } from "../../../redux/user/userActions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3f3f6f",
    paddingTop: 35,
    maxHeight: 90,
    zIndex: -1
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    justifyContent: "space-between"
  },
  titleBlock: {
    position: "absolute",
    paddingTop: 35,
    width: "100%",
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 20
  }
});

const TopNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0f0f0f" barStyle="light-content" />

      <View style={styles.titleBlock}>
        <Text style={styles.title}>Overview</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.leftButton}>
          <Icon name="pencil" size={25} color="white" onPress={() => navigation.navigate("Settings")} />
        </View>

        <View style={styles.rightButton}>
          <Icon name="gear" size={25} color="white" onPress={() => navigation.navigate("Settings")} />
        </View>
      </View>

    </View>
  );
};

export default TopNavigation;
