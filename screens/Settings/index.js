import React from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";
import SignOut from "./components/SignOut";
import TopBar from "../../components/TopBar";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8"
  }
});

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TopBar
        title="Settings"
        leftIcon={<Icon name="pencil" size={25} color="white" onPress={() => navigation.navigate("Overview")} />}
        rightIcon={<Icon name="pencil" size={25} color="white" onPress={() => navigation.navigate("Overview")} />}
      />
      <SignOut />
    </View>
  );
};

export default Settings;
