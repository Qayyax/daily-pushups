import { Pressable, StyleSheet, Text, View } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import { colors } from "@/constants/color";

type Props = {
  onPress: () => void;
};

export default function LogSetHeader({ onPress }: Props) {
  return (
    <View style={styles.container}>
      <View />
      <Text style={styles.text}>Log a set</Text>
      <Pressable style={styles.iconContainer} onPress={onPress}>
        <Fontisto name="close-a" size={20} color="black" />
      </Pressable>
    </View>
  );
}

// spacer log x
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
  },
  iconContainer: {
    backgroundColor: colors.midPurple,
    padding: 10,
    borderRadius: 50,
  },
});
