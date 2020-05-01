import React, { useState } from "react";
import {
  Alert, Text, View, TextInput, TouchableOpacity
} from "react-native";
import { Button } from "react-native-elements";
import { connect } from "react-redux";
import firebase from "../../../../database/firebase";
import styles from "./styles";
import {
  emailSignInStart
} from "../../../../redux/user/userActions";

const SignUp = ({ emailSignInStart }) => {
  const [signUp, setsignUp] = useState({
    displayName: "",
    email: "",
    password: "",
    isLoading: false
  });
  const {
    displayName, email, password
  } = signUp;
  const handleInput = (name, input) => {
    setsignUp((previousState) => ({
      ...previousState,
      [name]: input
    }));
  };

  const registerUser = () => {
    if (email === "" && password === "") {
      Alert.alert("Enter details to signup!");
    } else {
      setsignUp({
        isLoading: true
      });
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          res.user.updateProfile({
            displayName
          });
          console.log("User registered successfully!");
          emailSignInStart({ email, password: res.user.uid });
          setsignUp({
            isLoading: false,
            displayName: "",
            email: "",
            password: ""
          });
        })
        .catch((error) => setsignUp({ errorMessage: error.message }));
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Name</Text>
        <TextInput
          placeholder="Name"
          autoCapitalize="none"
          value={displayName}
          style={styles.input}
          onChangeText={(value) => handleInput("displayName", value)}
        />
      </View>
      <View>
        <Text style={styles.text}>Email</Text>
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          style={styles.input}
          onChangeText={(value) => handleInput("email", value)}
        />
      </View>
      <View>
        <Text style={styles.text}>Password</Text>
        <TextInput
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry
          value={password}
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
          onPress={registerUser}
        />
      </View>
    </View>
  );
};

export default connect(null, { emailSignInStart })(SignUp);
