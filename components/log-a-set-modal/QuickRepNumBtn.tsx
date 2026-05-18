import { colors } from "@/constants/color";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  number: number;
  onPress: () => void;
};

export default function QuickRepNumBtn({ number, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        {
          backgroundColor: pressed ? colors.lightContainerBg : colors.midPurple,
        },
      ]}
      onPress={onPress}
    >
      <Text>{number}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderRadius: 16,
    alignItems: "center",
    // flex: 1,
  },
});
