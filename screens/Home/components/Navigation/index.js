import React, { useState, useEffect } from "react";
import {
  View, Text, TouchableOpacity, Animated, ScrollView, Dimensions
} from "react-native";
import styles from "./styles";
import Login from "../Login";
import SignUp from "../SignUp";

const { width } = Dimensions.get("window");
const RegistrationNavi = () => {
  const [state, setState] = useState({
    active: 0,
    PageOne: 0,
    PageTwo: 0,
    translateX: new Animated.Value(0),
    translatePageOne: new Animated.Value(0),
    translatePageTwo: new Animated.Value(width)
  });

  const {
    PageOne, PageTwo, active, translateX, translatePageOne, translatePageTwo
  } = state;

  const handleSlide = (type) => {
    Animated.spring(translateX, {
      toValue: type,
      duration: 100
    }).start();

    if (active === 0) {
      Animated.parallel([
        Animated.spring(translatePageOne, {
          toValue: 0,
          duration: 100
        }).start(),
        Animated.spring(translatePageTwo, {
          toValue: width,
          duration: 100
        }).start()
      ]);
    } else {
      Animated.parallel([
        Animated.spring(translatePageOne, {
          toValue: -width,
          duration: 100
        }).start(),
        Animated.spring(translatePageTwo, {
          toValue: 0,
          duration: 100
        }).start()
      ]);
    }
  };

  useEffect(() => {
    if (active === 0) {
      handleSlide(PageOne);
    }
    if (active === 1) {
      handleSlide(PageTwo);
    }
  }, [active]);


  return (
    <View style={styles.container}>
      <View style={styles.TopNaviContainer}>
        <View style={styles.NavView}>
          <Animated.View
            style={{
              position: "absolute",
              width: "50%",
              height: "100%",
              top: 0,
              left: 0,
              backgroundColor: "#007aff",
              borderRadius: 4,
              transform: [{
                translateX
              }]
            }}
          />
          <TouchableOpacity
            style={styles.TouchableLeftButton}
            onLayout={() => setState((previousState) => ({
              ...previousState,
              PageOne: 0
            }))}
            onPress={() => setState((previousState) => ({
              ...previousState,
              active: 0
            }))}
          >
            <Text style={{ color: active === 0 ? "black" : "#007aff " }}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableRightButton}
            onLayout={() => setState((previousState) => ({
              ...previousState,
              PageTwo: 186.5
            }))}
            onPress={() => setState((previousState) => ({
              ...previousState,
              active: 1
            }))}
          >
            <Text style={{ color: active === 0 ? "black" : "#007aff " }}>SignUp</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          <Animated.View style={{
            justifyContent: "center",
            alignItems: "center",
            transform: [{
              translateX: translatePageOne
            }]
          }}
          >
            <Login />
          </Animated.View>
          <Animated.View style={{
            justifyContent: "center",
            alignItems: "center",
            transform: [{
              translateX: translatePageTwo
            }]
          }}
          >
            <SignUp />
          </Animated.View>
        </ScrollView>
      </View>
    </View>
  );
};

export default RegistrationNavi;
