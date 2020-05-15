import React, { useState, useEffect } from "react";
import {
  Alert, Text, View, TextInput, TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import styles from "./styles";
import firebase from "../../../../database/firebase";
import {
  emailSignInStart
} from "../../../../redux/user/userActions";

const Login = ({ emailSignInStart, navigation }) => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    isLoading: false
  });

  const handleInput = (name, input) => {
    setLogin((previousState) => ({
      ...previousState,
      [name]: input
    }));
  };

  const userLogin = () => {
    if (login.email === "" && login.password === "") {
      Alert.alert("Enter details to signin!");
    } else {
      setLogin({
        isLoading: true
      });
      firebase
        .auth()
        .signInWithEmailAndPassword(login.email, login.password)
        .then((res) => {
          console.log(res);
          console.log("User logged-in successfully!");
          emailSignInStart({ email: login.email, password: res.user.uid });
        })
        .catch((error) => setLogin({ errorMessage: error.message }));
    }
  };

  useEffect(() => setLogin({
    isLoading: false,
    email: "",
    password: ""
  }), []);

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
          autoCapitalize="none"
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
          autoCapitalize="none"
          value={login.password}
          style={styles.input}
          onChangeText={(value) => handleInput("password", value)}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Button
          title="Login"
          buttonStyle={styles.bottomBtn}
          containerStyle={styles.btnContainer}
          onPress={userLogin}
        />
        <Button
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
