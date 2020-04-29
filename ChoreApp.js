import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { Text } from "react-native-elements";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUserToken } from "./redux/user/selectors";
import Overview from "./screens/Overview";

// Screens
import { Login, Landing } from "./screens";

const Home = createStackNavigator();

const ChoreApp = ({ token }) => {
  const [signedIn] = useState(false);

  const HomeStack = () => (
    <Home.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: "horizontal",
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}
    >
      <Home.Screen name="Home" component={Landing} />
      <Home.Screen name="Login" component={Login} />
    </Home.Navigator>
  );

  return (
    <NavigationContainer>
      { token ? <Overview></Overview> : <HomeStack />}
    </NavigationContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  token: selectCurrentUserToken
});

export default connect(mapStateToProps, null)(ChoreApp);
