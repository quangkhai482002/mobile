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

export default function Home({ route, navigation }) {
  const isDarkmode = useColorScheme() === "dark";
  const { email } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkmode ? "light-content" : "dark-content"} />
      <View style={{ with: "100%", height: "100%" }}>
        {/* row thu 1 */}
        <View
          style={{
            with: "100%",
            height: "16.6%",
            borderWidth: 1,
            borderColor: "black",
            flexDirection: "row",
          }}
        >
          {/* O vuong chua hinh nau do */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              width: "33%",
            }}
          >
            <View
              style={{
                width: "80%",
                height: "80%",
                backgroundColor: "red",
                borderRadius: 20,
              }}
            ></View>
          </View>
          {/* O vuong chua chu Toi ten la Khai */}
          <View style={{ height: "100%", width: "67%", borderLeftWidth: 1 }}>
            <Text style={{ marginTop: 20, marginLeft: 20 }}>
              Email: <Text>{email}</Text>
            </Text>
          </View>
        </View>

        {/* row thu 2 */}
        <View
          style={{
            flexDirection: "row",
            with: "100%",
            height: "16.6%",
          }}
        >
          <View
            style={{
              height: "100%",
              width: "66.6%",
              // borderWidth: 1,
              // borderColor: "blue",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Text nam o giua
            </Text>
          </View>
          {/* O chua 2 o tren duoi */}
          <View
            style={{
              height: "100%",
              width: "34%",
              // borderWidth: 1,
              // borderColor: "blue",
            }}
          >
            <View
              style={{
                height: "50%",
                width: "100%",
                // borderWidth: 1,
                // borderColor: "blue",
                backgroundColor: "green",
              }}
            ></View>
            <View
              style={{
                height: "50%",
                width: "100%",
                // borderWidth: 1,
                // borderColor: "blue",
                backgroundColor: "blue",
              }}
            ></View>
          </View>
        </View>

        {/* row thu 3 */}
        <View
          style={{
            height: "16.6%",
            with: "100%",
            // borderColor: "green",
            // borderWidth: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              height: "100%",
              width: "33.3%",
              // borderWidth: 1,
              // borderColor: "yellow",
              backgroundColor: "yellow",
            }}
          ></View>
          <View
            style={{
              height: "100%",
              width: "33.3%",
              // borderWidth: 1,
              // borderColor: "red",
              backgroundColor: "#1e90ff",
            }}
          ></View>
          <View
            style={{
              height: "100%",
              flex: 1,
              // borderWidth: 1,
              // borderColor: "black",
              backgroundColor: "#00bfff",
            }}
          ></View>
        </View>

        {/* row thu 4 */}
        <View
          style={{
            height: "34%",
            with: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: "60%",
              width: "60%",
              backgroundColor: "purple",
            }}
          >
            <View
              style={{
                height: "50%",
                aspectRatio: 1,
                backgroundColor: "red",
                position: "absolute",
                right: -20,
                top: -20,
              }}
            ></View>
          </View>
        </View>

        {/* row thu 5 */}
        <View
          style={{
            with: "100%",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "80%",
              height: "50%",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                width: "45%",
                height: "100%",
                backgroundColor: "#808080",
                borderColor: "red",
                borderWidth: 3,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.navigate("UserInfor");
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 700 }}>
                Thông tin tài khoản
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "45%",
                height: "100%",
                backgroundColor: "#3333ff",
                borderColor: "black",
                borderWidth: 3,
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => {
                navigation.navigate("Setting");
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: 700, color: "white" }}>
                Setting
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    // height: 10,
    paddingTop: 30,
  },
});
