import RepsModal from "@/components/log-a-set-modal/RepsModal";
import LogSetBtn from "@/components/LogSetBtn";
import QuotesCard from "@/components/QuotesCard";
import { useState } from "react";
import { Modal, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [showLog, setShowLog] = useState(false);

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        paddingHorizontal: 16,
      }}
    >
      <Text>Testing that this is a page</Text>
      <QuotesCard
        source="Carlos Ruiz Zafon"
        quote="We are willing to believe anything other than the truth."
      />
      <QuotesCard
        source="ashaunte is the best"
        quote="You haven't met all the people that are going to love you"
      />

      <View style={{ width: "100%" }}>
        <LogSetBtn type="set" onPress={() => setShowLog(true)} />
      </View>
      <Modal visible={showLog} animationType="slide">
        <SafeAreaView style={{ flex: 1, padding: 16 }}>
          <RepsModal onPress={() => setShowLog(false)} />
        </SafeAreaView>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
