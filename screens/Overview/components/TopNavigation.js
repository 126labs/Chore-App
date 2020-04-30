import React from "react";
import {
  StyleSheet, Text, View, StatusBar
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

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
    width: 80
  },

  mid: {
    flex: 1,
    alignItems: "center"
  },

  right: {
    width: 80
  }
});

const TopNavigation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor="#12181d" barStyle="light-content" />
      <View style={styles.left}>
        <Button
          buttonStyle={{ backgroundColor: "#12181d" }}
          icon={(<Icon name="user" size={25} color="white" />)}
          onPress={() => navigation.navigate("Setting")}
        />
      </View>

      <View style={styles.mid}><Text style={{ color: "white", fontSize: 25 }}>Chore app</Text></View>

      <View style={styles.right}>
        <Button
          buttonStyle={{ backgroundColor: "#12181d" }}
          icon={<Icon name="cog" size={25} color="white" />}
          onPress={() => navigation.navigate("Setting")}
        />
      </View>
    </View>
  );
};

export default TopNavigation;
