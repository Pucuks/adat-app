import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import colors from "../constant/colors";
import AppScreenBackground from "../components/ScreenBackground";
import MyButton from "../components/MyButton";
import Home from "./Home";

export default function WelcomeScreen({ navigation }) {
  return (
    <AppScreenBackground>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.heading}>Indonesia</Text>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require("../images/indonesia.png")}
          />
          <Text style={styles.text}>Belajar Baju Adat Bersama</Text>
        </View>
        <>
          <MyButton
            style={styles.button}
            title="Mulai"
            onPress={() => navigation.navigate("Home")}
          />
        </>
      </SafeAreaView>
    </AppScreenBackground>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    textAlign: "center",
    color: colors.white,
    marginTop: 80,
    fontFamily: "monospace",
    fontWeight: "bold",
  },
  container: {
    paddingHorizontal: 30,
    paddingBottom: 40,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginVertical: 30,
  },
  image: {
    left: Dimensions.get("screen").width / 25,
    borderRadius: 16,
    resizeMode: "contain",
    top: (Dimensions.get("screen").height / 100) * -2,
    marginTop: 80,
    marginBottom: 40,
    width: 300,
  },
  text: {
    fontSize: 24,
    color: colors.white,
    fontFamily: "monospace",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: -50,
    marginBottom: 120,
  },
  button: {
    top: 100,
    backgroundColor: colors.soft,
  },
});
