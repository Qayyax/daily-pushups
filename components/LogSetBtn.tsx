import { colors } from "@/constants/color";
import Entypo from "@expo/vector-icons/Entypo";
import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  type: "set" | "primary";
  onPress: () => void;
};

export default function LogSetBtn({ type, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? colors.midPurple : colors.primary,
        },
      ]}
      onPress={onPress}
    >
      {type === "set" && <Entypo name="plus" size={30} color="white" />}
      <Text style={styles.content}>
        {type === "set" ? "Log a set" : "Log it"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    flex: 1,
    maxHeight: 50,
    alignItems: "center",
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  content: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
