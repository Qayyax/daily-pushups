// TODO:
// would remove the tailwind css later
// make it a logit button  instead

import Entypo from "@expo/vector-icons/Entypo";
import { ColorValue, Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  color: ColorValue;
  type: "set" | "primary";
  onPress: () => void;
};

export default function RoudedRectangle({ color, type, onPress }: Props) {
  return (
    <Pressable
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      {/* icon here if type is set*/}
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
    width: "100%",
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
