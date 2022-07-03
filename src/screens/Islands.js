import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import MyButton from "../components/MyButton";
import MyBack from "../components/MyBack";
import { DETAIL_ADAT } from "../constant/constant";
import AppScreenBackground from "../components/ScreenBackground";
import colors from "../constant/colors";

const Islands = ({ route, navigation }) => {
  const data = route.params;
  return (
    <AppScreenBackground>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <View style={{ marginBottom: 80 }} />
          <Image
            style={styles.image}
            source={require("../images/headingimage.png")}
          />
        </View>
        <Text style={styles.heading}>Provinsi</Text>
        <View style={{ marginBottom: 20 }} />
        <FlatList
          data={data.listProvinsi}
          renderItem={({ item }) => {
            return (
              <React.Fragment>
                <MyButton
                  title={item.titleProvinsi}
                  onPress={() => navigation.navigate(DETAIL_ADAT, { ...item })}
                />
                <View style={{ marginBottom: 20 }} />
              </React.Fragment>
            );
          }}
        />
      </SafeAreaView>
    </AppScreenBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  heading: {
    fontSize: 40,
    textAlign: "center",
    color: colors.white,
    marginTop: 80,
    fontFamily: "monospace",
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginVertical: 30,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default Islands;
