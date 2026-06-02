import RepsModal from "@/components/log-a-set-modal/RepsModal";
import LogSetBtn from "@/components/LogSetBtn";
import QuotesCard from "@/components/QuotesCard";
import RepsProgressBar from "@/components/RepsProgressBar";
import { useState } from "react";
import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// TODO:
// - [] data in local file and data types
// - [] reps
// - [] total reps goal for the day button (maybe in settings)
// - [] log a set logs a set, total sets should be with a function from data

export default function Index() {
  const [showLog, setShowLog] = useState(false);
  const [currentReps, setCurrentRep] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.userText}>Hey User</Text>
        <RepsProgressBar currentRep={currentReps} totalRep={100} />
      </View>

      <View style={styles.bottomContainer}>
        <QuotesCard
          source="Carlos Ruiz Zafon"
          quote="We are willing to believe anything other than the truth."
        />

        <LogSetBtn type="set" onPress={() => setShowLog(true)} />

        {/* shows up When the logSetBtn is pressed */}
        <Modal visible={showLog} animationType="slide">
          <SafeAreaView style={{ flex: 1, padding: 16 }}>
            <RepsModal
              currentReps={currentReps}
              closeModalBtn={() => setShowLog(false)}
              onPress={(rep) => {
                setCurrentRep(rep);
                setShowLog(false);
              }}
            />
          </SafeAreaView>
        </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    padding: 16,
  },
  topContainer: {
    flex: 2,
    width: "100%",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 1,
    gap: 16,
    justifyContent: "flex-end",
    paddingBottom: 20,
  },
  userText: {
    alignSelf: "flex-start",
    fontSize: 28,
    fontWeight: 700,
    paddingBottom: 40,
  },
});
