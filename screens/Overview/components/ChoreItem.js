/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Text, View, Image, TouchableOpacity, StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import styles from "../styles";


const circleDiameter = 100;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "30%"
  },
  circle: {
    height: circleDiameter,
    width: circleDiameter,
    borderRadius: circleDiameter / 2,
    backgroundColor: "lightgray",
    borderWidth: 2,
    borderColor: "white"
  },
  title: {
    paddingTop: 5,
    fontSize: 16,
    fontWeight: "600"
  },
  body: {
    fontSize: 14
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(240,240,240,0.7)",
    borderRadius: circleDiameter,
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  check: {
    fontSize: 50,
    color: "#333333"
  }
});

const ChoreItem = ({ item }) => {
  const [done, setDone] = useState(item.done);

  const checkmark = <View style={styles.overlay} pointerEvents="none"><Icon name="check" style={styles.check} /></View>;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setDone(!done)}>
        <View>
          <Image style={styles.circle} source={{ uri: item.photo }} />
          {done ? checkmark : null}
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{item.chore}</Text>
      <Text style={styles.body}>{item.name}</Text>
    </View>
  );
};

export default ChoreItem;
