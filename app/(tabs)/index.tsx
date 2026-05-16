import IncreaseDecreaseBtn from "@/components/log-a-set-modal/IncreaseDecreaseBtn";
import LogSetHeader from "@/components/log-a-set-modal/logSetHeader";
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
      <Text>Testing that this is a page</Text>
      <LogSetBtn type="set" onPress={() => alert("clicked")} />
      <QuotesCard
        source="Carlos Ruiz Zafon"
        quote="We are willing to believe anything other than the truth."
      />
      <View>
        <LogSetHeader onPress={() => alert("clicked")} />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <IncreaseDecreaseBtn type="minus" onPress={() => alert("decrease")} />
          <IncreaseDecreaseBtn type="plus" onPress={() => alert("increase")} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
