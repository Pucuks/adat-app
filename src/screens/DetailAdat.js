import { Text, View, Image } from "react-native";

const DetailAdat = ({ route }) => {
  const data = route.params;
  return (
    <View>
      <Text>Detail Adat</Text>
      <Image source={data.image} />
      <Text>{data.mahkota.title}</Text>
      <Text>{data.mahkota.pria}</Text>
      <Text>{data.mahkota.wanita}</Text>
    </View>
  );
};

export default DetailAdat;
