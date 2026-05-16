import LogSetBtn from "@/components/LogSetBtn";
import QuotesCard from "@/components/QuotesCard";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
