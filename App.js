// import { Input } from "antd";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TextInput,
  useColorScheme,
  Button,
  Touchable,
  TouchableOpacity,
} from "react-native";
import RootComponent from "./src/views/index";
import Login from "./src/views/login";
import Home from "./src/views/home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const isDarkmode = useColorScheme() === "dark";
  return (
    <>
      <RootComponent />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});
