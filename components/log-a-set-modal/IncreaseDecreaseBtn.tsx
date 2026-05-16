import { colors } from "@/constants/color";
import { Pressable, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

type Props = {
  onPress: () => void;
  type: "plus" | "minus";
};
export default function IncreaseDecreaseBtn({ onPress, type }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Entypo name={type} size={24} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightContainerBg,
    padding: 10,
    borderRadius: 16,
    borderWidth: 2,
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
});
