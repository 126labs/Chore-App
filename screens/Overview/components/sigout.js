import React from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { signOutStart } from "../../../redux/user/userActions";

const Button = ({ signOutStart }) => (
  <View>
    <TouchableOpacity onPress={signOutStart}>
      <Text>Please sign out</Text>
    </TouchableOpacity>
  </View>
);


export default connect(null, { signOutStart })(Button);
