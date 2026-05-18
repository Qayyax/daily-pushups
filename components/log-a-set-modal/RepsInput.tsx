import { colors } from "@/constants/color";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function RepsInput() {
  const [currentReps, setCurrentReps] = useState(0);
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="number-pad"
        value={String(currentReps)}
        onChangeText={(reps) => setCurrentReps(Number(reps))}
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
