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
  const bajuAdat = route.params;
  return (
    <ScrollView>
      <>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require("../images/jalan.png")}
        />
        <Image
          style={styles.imageCharacter}
          resizeMode="contain"
          source={bajuAdat.image}
        />
        <Image
          style={styles.imageMatahari}
          resizeMode="contain"
          source={require("../images/matahari.png")}
        />

        <Text style={styles.heading}>{bajuAdat.titleProvinsi}</Text>

        <View style={styles.borderCard}>
          <View style={styles.viewCard}>
            <Text style={styles.textTitle}>{bajuAdat.mahkota.title}</Text>
            <Text style={styles.baseText}>Pria : {bajuAdat.mahkota.pria}</Text>
            <Text style={styles.baseText}>
              Wanita : {bajuAdat.mahkota.wanita}
            </Text>
          </View>
          <View style={{ marginBottom: 20 }} />
          <View style={styles.viewCard}>
            <Text style={styles.textTitle}>{bajuAdat.atasan.title}</Text>
            <Text style={styles.baseText}>Pria : {bajuAdat.atasan.pria}</Text>

            <Text style={styles.baseText}>
              Wanita : {bajuAdat.atasan.wanita}
            </Text>
          </View>
          <View style={{ marginBottom: 20 }} />
          <View style={styles.viewCard}>
            <Text style={styles.textTitle}>{bajuAdat.bawahan.title}</Text>
            <Text style={styles.baseText}>Pria : {bajuAdat.bawahan.pria}</Text>

            <Text style={styles.baseText}>
              Wanita : {bajuAdat.bawahan.wanita}
            </Text>
          </View>
          <View style={{ marginBottom: 20 }} />
          <View style={styles.viewCard}>
            <Text style={styles.textTitle}>{bajuAdat.aksesoris.title}</Text>

            <Text style={styles.baseText}>
              Pria : {bajuAdat.aksesoris.pria}
            </Text>

            <Text style={styles.baseText}>
              Wanita : {bajuAdat.aksesoris.wanita}
            </Text>
          </View>
          <View style={{ marginBottom: 20 }} />
          <View style={styles.viewCard}>
            <Text style={styles.textTitle}>{bajuAdat.faktaunik.title}</Text>
            <Text style={styles.baseText}>{bajuAdat.faktaunik.text}</Text>
          </View>
        </View>
      </>
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
    top: -20,
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
