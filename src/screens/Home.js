import React from "react";
import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  StyleSheet,
} from "react-native";
import { ISLAND } from "../constant/constant";
import MyButton from "../components/MyButton";
import bajuAdat from "../data/BajuAdat";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Pulau</Text>
      <FlatList
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
              <View style={{ marginBottom: 8 }} />
            </React.Fragment>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
export default Home;
