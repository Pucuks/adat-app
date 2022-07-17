import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

export default function ScreenCard({ children, image }) {
  return (
    <ImageBackground resizeMethod="auto" style={styles.image} source={image}>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "100%",
    backgroundColor: "#8D9A62",
  },
});
