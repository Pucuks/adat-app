import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

export default function AppImageBackground({ children, image }) {
  return (
    <ImageBackground resizeMethod="auto" style={styles.image} source={image}>
      {children}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    flex: 1,
  },
});
