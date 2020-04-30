import React from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity } from "react-native";
import { signOutStart } from "../../../redux/user/userActions";

// change style remove
const Button = ({ signOutStart }) => (
  <View style={{ marginTop: 50 }}>
    <TouchableOpacity onPress={signOutStart}>
      <Text>Please sign out</Text>
    </TouchableOpacity>
  </View>
);


export default connect(null, { signOutStart })(Button);
