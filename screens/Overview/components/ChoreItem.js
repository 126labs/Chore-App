/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Text, View, Image, TouchableOpacity, StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


const circleDiameter = 50;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "47%",
    height: 100,
    backgroundColor: "white",
    margin: 5,
    borderRadius: 7,
    padding: 10,
    borderBottomWidth: 0,
    shadowColor: "#d0d0d0",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
  },
  circle: {
    height: circleDiameter,
    width: circleDiameter,
    borderRadius: circleDiameter / 2,
    backgroundColor: "lightgray",
    // borderWidth: 2,
    // borderColor: "white"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(240,240,240,0.7)",
    borderRadius: circleDiameter,
    alignItems: "center",
    justifyContent: "center"
  },
  titleBlock: {
    marginLeft: 8
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#303030"
  },
  frequency: {
    fontSize: 10,
    color: "#707070"
  },
  body: {
    fontSize: 12,
    color: "#707070"
  },
  check: {
    fontSize: 30,
    color: "#004d70"
  },
  topRow: {
    flexDirection: "row"
  },
  timeframeBlock: {
    marginTop: 15
  },
  timeframe: {
    fontSize: 12
  }
});

const ChoreItem = ({ item }) => {
  const [done, setDone] = useState(item.done);

  const checkmark = <View style={styles.overlay} pointerEvents="none"><Icon name="check" style={styles.check} /></View>;

  return (
    <View style={styles.container}>

      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => setDone(!done)}>
          <View>
            <Image style={styles.circle} source={{ uri: item.photo }} />
            {done ? checkmark : null}
          </View>
        </TouchableOpacity>

        <View style={styles.titleBlock}>
          <Text style={styles.title}>{item.chore}</Text>
          <Text style={styles.body}>{item.name}</Text>
          <View style={styles.timeframeBlock}>
            <Text style={styles.timeframe}>{item.timeframe}</Text>
            <Text style={styles.frequency}>{item.frequency}</Text>
          </View>
        </View>
      </View>

    </View>
    // <View style={styles.container}>
    //   <TouchableOpacity onPress={() => setDone(!done)}>
    //     <View>
    //       <Image style={styles.circle} source={{ uri: item.photo }} />
    //       {done ? checkmark : null}
    //     </View>
    //   </TouchableOpacity>
    //   <Text style={styles.title}>{item.chore}</Text>
    //   <Text style={styles.body}>{item.name}</Text>
    // </View>
  );
};

export default ChoreItem;
