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
      <LogSetBtn color={"purple"} type="set" onPress={() => alert("clicked")} />
      <QuotesCard source="Daily Mantra" quote="Discipline equals freedom" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
