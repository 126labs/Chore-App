/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Text, View, Image, TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles";

const ChoreItem = (props) => {
  const placeholderPhoto = "https://choreappphotos.s3-us-west-1.amazonaws.com/16.jpg";
  const [chore, setChore] = useState("Trash");
  const [name, setName] = useState("Chris");
  const [photo, setPhoto] = useState(placeholderPhoto);
  const [done, setDone] = useState(false);

  const checkmark = <View style={styles.overlay} pointerEvents="none"><Icon name="check" style={styles.check} /></View>;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setDone(!done)}>
        <View>
          <Image style={styles.circle} source={{ uri: photo }} />
          {done ? checkmark : null}
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{chore}</Text>
      <Text style={styles.body}>{name}</Text>
    </View>
  );
};

export default ChoreItem;
