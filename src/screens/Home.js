import React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { ISLAND } from "../constant/constant";
import MyButton from "../components/MyButton";
import bajuAdat from "../data/BajuAdat";
import AppScreenBackground from "../components/ScreenBackground";
import colors from "../constant/colors";
import AppScreen from "../components/Screen";

const Home = ({ navigation }) => {
  return (
    <AppScreenBackground>
      <AppScreen>
        <SafeAreaView style={styles.container}>
          <View style={styles.imageContainer}>
            <View style={{ marginBottom: 80 }} />
            <Image
              style={styles.image}
              source={require("../images/headingimage.png")}
            />
          </View>
          <Text style={styles.heading}>Pulau</Text>
          <View style={{ marginBottom: 20 }} />
          <FlatList
            style={{ height: 500 }}
            data={bajuAdat}
            renderItem={({ item }) => {
              return (
                <React.Fragment>
                  <MyButton
                    title={item.title}
                    onPress={() =>
                      navigation.navigate(ISLAND, {
                        listProvinsi: item.listProvinsi,
                      })
                    }
                  />
                  <View style={{ marginBottom: 20 }} />
                </React.Fragment>
              );
            }}
          />
        </SafeAreaView>
      </AppScreen>
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
export default Home;
