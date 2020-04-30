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

const SignUp = ({ emailSignInStart }) => {
  const [login, setLogin] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleInput = (name, input) => {
    setLogin((previousState) => ({
      ...previousState,
      [name]: input
    }));
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Email</Text>
        <TextInput
          placeholder="Name"
          value={login.username}
          style={styles.input}
          onChangeText={(value) => handleInput("name", value)}
        />
      </View>
      <View>
        <Text style={styles.text}>Email</Text>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          value={login.email}
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
          title="SignUp"
          buttonStyle={styles.bottomBtn}
          containerStyle={styles.btnContainer}
          onPress={emailSignInStart}
        />
      </View>
    </View>
  );
};

export default connect(null, { emailSignInStart })(SignUp);
