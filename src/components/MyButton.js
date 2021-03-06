import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../constant/colors";

const MyButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.myButton} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  myButton: {
    backgroundColor: colors.white,
    padding: 16,
    alignItems: "center",
    borderRadius: 24,
  },
  title: {
    fontSize: 30,
  },
});
export default MyButton;
