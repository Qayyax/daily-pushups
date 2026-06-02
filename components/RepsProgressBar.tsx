import { colors } from "@/constants/color";
import { StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

/*
 * We need a rounded circle,
 * with a progress color  that increases as the number increases
 * would use a state for that one,
 * The progress would be based on how many reps / goal reps
 */
type Props = {
  currentRep: number;
  totalRep: number;
};

export default function RepsProgressBar({ currentRep, totalRep }: Props) {
  return (
    <AnimatedCircularProgress
      size={250}
      width={20}
      fill={(currentRep / totalRep) * 100}
      tintColor={colors.primary}
      rotation={360}
      backgroundColor={colors.midPurple}
      lineCap="round"
      children={() => (
        <View style={styles.main}>
          <Text style={styles.currentRep}>{String(currentRep)}</Text>
          <Text>of {String(totalRep)} reps</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
  },
  currentRep: {
    fontSize: 120,
  },
});
