import React, { Component } from "react";
import { View, Text, SafeAreaView, Settings } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import Home from "./home";
import Login from "./login";
import Setting from "./setting";
import History from "./history";
import UserInfor from "./UserInformation";
import ChangePassword from "./changePassword";

const Stack = createNativeStackNavigator();

export default RootComponent = function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="UserInfor" component={UserInfor} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
