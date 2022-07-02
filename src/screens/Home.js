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
                onPress={() => navigation.navigate(ISLAND)}
              />
              <View style={{ marginBottom: 8 }} />
            </React.Fragment>
          );
        }}
      />
      <Button
        title="Pergi Ke Pulau"
        onPress={() => navigation.navigate(ISLAND)}
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
