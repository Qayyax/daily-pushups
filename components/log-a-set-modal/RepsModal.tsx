import { FlatList, StyleSheet, View } from "react-native";
import LogSetHeader from "./logSetHeader";
import IncreaseDecreaseBtn from "./IncreaseDecreaseBtn";
import RepsInput from "./RepsInput";
import LogSetBtn from "../LogSetBtn";
import QuickRepNumBtn from "./QuickRepNumBtn";
import { useState } from "react";

type Props = {
  closeModalBtn: () => void;
  onPress: (rep: number) => void;
  currentReps: number;
};

export default function RepsModal({ onPress, closeModalBtn, currentReps: initialReps }: Props) {
  const [currentReps, setCurrentReps] = useState(initialReps);

  const quickReps = [10, 20, 50, 100];

  const onIncreaseReps = () => {
    setCurrentReps((rep) => rep + 1);
  };

  const onDecreaseReps = () => {
    setCurrentReps((rep) => (rep > 0 ? rep - 1 : rep));
  };

  const onQuickReps = (num: number) => {
    setCurrentReps((rep) => {
      if (rep > 0) {
        return rep + num;
      }
      return num;
    });
  };

  return (
    <View style={styles.container}>
      <LogSetHeader onPress={closeModalBtn} />

      <View style={styles.repsContainer}>
        <RepsInput
          currentReps={currentReps}
          onChangeReps={(rep) => setCurrentReps(Number(rep))}
        />

        <View style={styles.addBtns}>
          <IncreaseDecreaseBtn type="minus" onPress={onDecreaseReps} />
          <IncreaseDecreaseBtn type="plus" onPress={onIncreaseReps} />
        </View>

        <FlatList
          data={quickReps}
          horizontal
          scrollEnabled={false}
          keyExtractor={(rep) => String(rep)}
          renderItem={({ item }) => (
            <QuickRepNumBtn number={item} onPress={() => onQuickReps(item)} />
          )}
          contentContainerStyle={styles.quickRepsBtnContainer}
        />
      </View>

      <LogSetBtn type="primary" onPress={() => onPress(currentReps)} />
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
