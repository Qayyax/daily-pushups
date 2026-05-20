import { FlatList, StyleSheet, View } from "react-native";
import LogSetHeader from "./logSetHeader";
import IncreaseDecreaseBtn from "./IncreaseDecreaseBtn";
import RepsInput from "./RepsInput";
import LogSetBtn from "../LogSetBtn";
import QuickRepNumBtn from "./QuickRepNumBtn";

type Props = {
  onPress: () => void;
};

export default function RepsModal({ onPress }: Props) {
  const quickReps = [10, 20, 50, 100];

  return (
    <View style={styles.container}>
      <LogSetHeader onPress={onPress} />

      <View style={styles.repsContainer}>
        <RepsInput />

        <View style={styles.addBtns}>
          <IncreaseDecreaseBtn type="minus" onPress={() => alert("decrease")} />
          <IncreaseDecreaseBtn type="plus" onPress={() => alert("increase")} />
        </View>

        <FlatList
          data={quickReps}
          horizontal
          scrollEnabled={false}
          keyExtractor={(rep) => String(rep)}
          renderItem={({ item }) => (
            <QuickRepNumBtn
              number={item}
              onPress={() => alert(`${item} reps`)}
            />
          )}
          contentContainerStyle={styles.quickRepsBtnContainer}
        />
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
  quickRepsBtnContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
  },
});
