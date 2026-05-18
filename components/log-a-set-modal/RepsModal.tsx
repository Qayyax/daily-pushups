import { StyleSheet, View } from "react-native";
import LogSetHeader from "./logSetHeader";
import IncreaseDecreaseBtn from "./IncreaseDecreaseBtn";
import RepsInput from "./RepsInput";
import LogSetBtn from "../LogSetBtn";

export default function RepsModal() {
  return (
    <View style={styles.container}>
      <LogSetHeader onPress={() => alert("clicked")} />

      <View style={styles.repsContainer}>
        <RepsInput />
        <View style={styles.addBtns}>
          <IncreaseDecreaseBtn type="minus" onPress={() => alert("decrease")} />
          <IncreaseDecreaseBtn type="plus" onPress={() => alert("increase")} />
        </View>
      </View>

      <LogSetBtn type="primary" onPress={() => alert("clicked")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  repsContainer: {
    gap: 30,
  },
  addBtns: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
