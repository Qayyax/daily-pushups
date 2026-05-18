import IncreaseDecreaseBtn from "@/components/log-a-set-modal/IncreaseDecreaseBtn";
import LogSetHeader from "@/components/log-a-set-modal/logSetHeader";
import RepsInput from "@/components/log-a-set-modal/RepsInput";
import RepsModal from "@/components/log-a-set-modal/RepsModal";
import LogSetBtn from "@/components/LogSetBtn";
import QuotesCard from "@/components/QuotesCard";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Index() {
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
      {/* <Text>Testing that this is a page</Text> */}
      {/* <LogSetBtn type="set" onPress={() => alert("clicked")} /> */}
      {/* <QuotesCard */}
      {/*   source="Carlos Ruiz Zafon" */}
      {/*   quote="We are willing to believe anything other than the truth." */}
      {/* /> */}
      {/* <QuotesCard */}
      {/*   source="ashaunte is the best" */}
      {/*   quote="You haven't met all the people that are going to love you" */}
      {/* /> */}

      {/* TODO: */}
      {/*   Turn this into a modal */}
      {/* basically wrap this shit in a modal */}
      <RepsModal />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
