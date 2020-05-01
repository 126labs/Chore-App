import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUserToken } from "./redux/user/selectors";

// Screens
import { Login, Landing, RegistrationNavi, Overview as MainOverview, Settings } from "./screens";

const Home = createStackNavigator();
const Overview = createStackNavigator();
const ChoreApp = ({ token }) => {
  const HomeStack = () => (
    <Home.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: "horizontal",
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}
    >
      <Home.Screen name="Home" component={Landing} />
      <Home.Screen name="Login" component={RegistrationNavi} />
    </Home.Navigator>
  );

  const OverviewStack = () => (
    <Overview.Navigator screenOptions={{
      headerShown: false,
      gestureEnabled: true,
      gestureDirection: "horizontal",
      cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
    }}
    >
      <Overview.Screen name="Overview" component={MainOverview} />
      <Overview.Screen name="Settings" component={Settings} />
    </Overview.Navigator>
  );

  return (
    <NavigationContainer>
      { token ? <OverviewStack /> : <HomeStack />}
    </NavigationContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  token: selectCurrentUserToken
});

export default connect(mapStateToProps, null)(ChoreApp);
