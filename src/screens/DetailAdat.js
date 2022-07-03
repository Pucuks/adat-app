import { Text, View, Image, StyleSheet, SafeAreaView } from "react-native";

const DetailAdat = ({ route }) => {
  const data = route.params;
  return (
    <SafeAreaView
      style={styles.container}
      image={require("../images/bgrhutan.png")}
    >
      <Text style={styles.heading}>Detail Adat</Text>
      <Image style={styles.image} resizeMode="contain" source={data.image} />

      <Text>{data.mahkota.title}</Text>
      <Text>{data.mahkota.pria}</Text>
      <Text>{data.mahkota.wanita}</Text>
      <Text>{data.bawahan.title}</Text>
      <Text>{data.bawahan.pria}</Text>
      <Text>{data.bawahan.wanita}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  heading: {
    fontSize: 35,
    textAlign: "right",
    padding: 20,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  image: {
    width: 200,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

export default DetailAdat;
