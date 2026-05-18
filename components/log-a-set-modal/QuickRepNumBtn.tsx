import { colors } from "@/constants/color";
import { Pressable, StyleSheet, Text, View } from "react-native";

type Props = {
  number: number;
  onPress: () => void;
};

export default function QuickRepNumBtn({ number, onPress }: Props) {
  return (
    <Pressable style={styles.container} onPress={onPress}>
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
    backgroundColor: colors.midPurple,
    alignItems: "center",
    // flex: 1,
  },
});
