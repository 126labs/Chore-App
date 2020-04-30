import React, { useState } from "react";
import {
  Alert, Text, View, TextInput, TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import styles from "./styles";

import {
  emailSignInStart
} from "../../../../redux/user/userActions";

const Login = ({ emailSignInStart }) => {
  const [login, setLogin] = useState({
    email: "",
    password: ""
  });

  const handleInput = (name, input) => {
    setLogin((previousState) => ({
      ...previousState,
      [name]: input
    }));
  };

  const onClick = (viewId) => {
    Alert.alert("Alert", `Button pressed ${viewId}`);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Email</Text>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          value={login.username}
          style={styles.input}
          onChangeText={(value) => handleInput("email", value)}
        />
      </View>
      <View>
        <Text style={styles.text}>Password</Text>
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={login.password}
          style={styles.input}
          onChangeText={(value) => handleInput("password", value)}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Button
          type="outline"
          title="Login"
          buttonStyle={styles.bottomBtn}
          containerStyle={styles.btnContainer}
          onPress={emailSignInStart}
        />
        <Button
          type="outline"
          title="Forgot your password?"
          buttonStyle={styles.bottomBtn}
          containerStyle={styles.btnContainer}
          onPress={() => onClick("reset password")}
        />
      </View>
    </View>
  );
};

export default connect(null, { emailSignInStart })(Login);
