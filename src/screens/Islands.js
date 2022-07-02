import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import MyButton from "../components/MyButton";
import { DETAIL_ADAT } from "../constant/constant";

const Islands = ({ route, navigation }) => {
  const data = route.params;
  return (
    <View>
      <Text>Island Screen</Text>
      <FlatList
        data={data.listProvinsi}
        renderItem={({ item }) => {
          return (
            <React.Fragment>
              <MyButton
                title={item.titleProvinsi}
                onPress={() => navigation.navigate(DETAIL_ADAT, { ...item })}
              />
            </React.Fragment>
          );
        }}
      />
    </View>
  );
};

export default Islands;
