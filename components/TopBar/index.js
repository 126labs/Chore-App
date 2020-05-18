import React from "react";
import { Text, View } from "react-native";

// Component styles
import styles from "./styles";

const TopBar = ({ title, rightIcon = null, leftIcon = null }) => (
  <View style={styles.container}>
    <View style={styles.titleBlock}>
      <Text style={styles.title}>{title}</Text>
    </View>

    {rightIcon || leftIcon ? (
      <View style={styles.buttons}>
        <View style={styles.leftButton}>
          { leftIcon }
        </View>

        <View style={styles.rightButton}>
          { rightIcon }
        </View>
      </View>
    ) : <Text />}

  </View>
);

export default TopBar;
