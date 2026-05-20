import { colors } from "@/constants/color";
import { StyleSheet, TextInput, View } from "react-native";

type Props = {
  currentReps: number;
  onChangeReps: (reps: string) => void;
};
export default function RepsInput({ currentReps, onChangeReps }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="number-pad"
        value={String(currentReps)}
        onChangeText={onChangeReps}
        placeholder="25"
        style={styles.textBox}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    minHeight: 200,
    borderWidth: 2,
    backgroundColor: colors.lightContainerBg,
    padding: 15,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  textBox: {
    fontSize: 150,
    flex: 1,
    fontWeight: 800,
  },
});
