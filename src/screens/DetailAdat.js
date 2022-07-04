import {
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import colors from "../constant/colors";
import AppScreenBackground from "../components/ScreenBackground";
import AppScreen from "../components/Screen";

const DetailAdat = ({ route }) => {
  const data = route.params;
  return (
    <ScrollView>
      <AppScreenBackground>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../images/jalan.png")}
        />
        <Image
          style={styles.imageCharacter}
          resizeMode="contain"
          source={data.image}
        />
        <Image
          style={styles.imageMatahari}
          resizeMode="contain"
          source={require("../images/matahari.png")}
        />

        <Text style={styles.heading}>{data.titleProvinsi}</Text>

        <View style={styles.borderCard}>
          <View style={styles.viewCard}>
            <Text style={styles.textTitle}>{data.mahkota.title}</Text>
            <Text style={styles.baseText}>Pria : {data.mahkota.pria}</Text>
            <Text style={styles.baseText}>Wanita : {data.mahkota.wanita}</Text>
          </View>
          <View style={{ marginBottom: 20 }} />
          <View style={styles.viewCard}>
            <Text style={styles.textTitle}>{data.atasan.title}</Text>
            <Text style={styles.baseText}>Pria : {data.atasan.pria}</Text>

            <Text style={styles.baseText}>Wanita : {data.atasan.wanita}</Text>
          </View>
          <View style={{ marginBottom: 20 }} />
          <View style={styles.viewCard}>
            <Text style={styles.textTitle}>{data.bawahan.title}</Text>
            <Text style={styles.baseText}>Pria : {data.bawahan.pria}</Text>

            <Text style={styles.baseText}>Wanita : {data.bawahan.wanita}</Text>
          </View>
          <View style={{ marginBottom: 20 }} />
          <View style={styles.viewCard}>
            <Text style={styles.textTitle}>{data.aksesoris.title}</Text>

            <Text style={styles.baseText}>Pria : {data.aksesoris.pria}</Text>

            <Text style={styles.baseText}>
              Wanita : {data.aksesoris.wanita}
            </Text>
          </View>
          <View style={{ marginBottom: 20 }} />
          <View style={styles.viewCard}>
            <Text style={styles.textTitle}>{data.faktaunik.title}</Text>
            <Text style={styles.baseText}>{data.faktaunik.text}</Text>
          </View>
        </View>
      </AppScreenBackground>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  baseText: {
    marginBottom: 4,
    fontSize: 13,
  },

  textTitle: {
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    textDecorationLine: "underline",
    borderRadius: 16,
    fontSize: 16,
    fontFamily: "monospace",
  },
  borderCard: {
    backgroundColor: colors.soft,
    padding: 28,
    width: "100%",
    borderRadius: 25,
    top: -45,
  },
  viewCard: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 24,
  },

  heading: {
    position: "absolute",
    fontSize: 20,
    textAlign: "justify",
    fontWeight: "bold",
    top: 24,
    right: -5,
    padding: 10,
    color: colors.black,
    backgroundColor: colors.white,
    borderRadius: 15,
  },

  imageCharacter: {
    position: "absolute",
    width: 210,
    left: Dimensions.get("screen").width / 4,
    resizeMode: "contain",
    top: (Dimensions.get("screen").height / 42) * -1,
  },
  image: {
    width: "100%",
    height: 475,
  },
  imageMatahari: {
    position: "absolute",
    width: 210,
    left: -40,
    top: 50,
  },
  // imageCard: {
  //   position: "absolute",
  //   width: 400,
  //   height: 550,
  //   left: 0,
  //   top: 330,
  // },
});

export default DetailAdat;
