import { StyleSheet, Text, View } from "react-native";

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
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.currentRep}>{String(currentRep)}</Text>
        <Text>of {String(totalRep)} reps</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 25,
    alignItems: "center",
    borderWidth: 20,
    borderRadius: "100%",
    maxWidth: 350,
    minWidth: 280,
  },
  main: {
    alignItems: "center",
    justifyContent: "center",
  },
  currentRep: {
    fontSize: 120,
  },
});
