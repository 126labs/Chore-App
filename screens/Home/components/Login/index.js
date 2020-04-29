import React, { useState } from "react";
import {
  Alert, Text, View, TextInput, TouchableHighlight
} from "react-native";
import { connect } from "react-redux";
import styles from "./styles";
import { ScreenContainer } from "../../../../components";

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
    <ScreenContainer>
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
      <TouchableHighlight style={styles.buttonContainer} onPress={emailSignInStart}>
        <Text style={styles.text}>Login</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => onClick("reset password")}>
        <Text style={styles.text}>Forgot your password?</Text>
      </TouchableHighlight>
    </ScreenContainer>
  );
};

export default connect(null, { emailSignInStart })(Login);
