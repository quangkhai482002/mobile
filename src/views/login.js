import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  TextInput,
} from "react-native";
import React, { Component, useState } from "react";

const windownWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function Login({ navigation }) {
  const [getEmail, setEmail] = useState("");
  return (
    <ImageBackground
      style={{ height: "100%", width: "100%" }}
      source={require("../images/background.jpg")}
      //   resizeMode="stretch"
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: "100%", width: "100%" }}>
          {/* Email && Password */}
          <View
            style={{
              height: "20%",
              width: "100%",
              //   backgroundColor: "green",
              marginTop: 0.3 * windowHeight,
              alignItems: "center",
            }}
          >
            {/* Email */}
            <View
              style={{
                width: "70%",
                height: 40,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ color: "white" }}>Email</Text>
              <TextInput
                style={{
                  height: "100%",
                  width: "70%",
                  borderBottomColor: "white",
                  borderBottomWidth: 1,
                }}
                value={getEmail}
                onChangeText={setEmail}
              />
            </View>

            {/* Password */}
            <View
              style={{
                width: "70%",
                height: 40,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Text style={{ color: "white" }}>Password</Text>
              <TextInput
                style={{
                  height: "100%",
                  width: "70%",
                  borderBottomColor: "white",
                  borderBottomWidth: 1,
                }}
              />
            </View>
          </View>

          {/* Button Login && Register */}
          <View
            style={{
              width: "100%",
              height: "30%",
              marginTop: 0.15 * windowHeight,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "white",
              borderWidth: 2,
            }}
          >
            {/* Dang nhap */}
            <TouchableOpacity
              style={{
                width: "60%",
                height: "30%",
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 100,
                backgroundColor: "#20b2aa",
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.navigate("Home", { email: getEmail });
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 600, color: "white" }}>
                Đăng nhập
              </Text>
            </TouchableOpacity>

            {/* Dang ki */}
            <TouchableOpacity
              style={{
                marginTop: 20,
                width: "60%",
                height: "30%",
                borderColor: "white",
                borderWidth: 1,
                borderRadius: 100,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#4169e1",
              }}
              onPress={() => {
                navigation.navigate("History");
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 600, color: "white" }}>
                Đăng kí
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
