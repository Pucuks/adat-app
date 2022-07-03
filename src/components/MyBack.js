import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../constant/colors";

const MyBack = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.myBack} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  myButton: {
    backgroundColor: colors.secondary,
    padding: 16,
    alignItems: "center",
    borderRadius: 24,
  },
  title: {
    fontSize: 30,
  },
});
export default MyBack;
