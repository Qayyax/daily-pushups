import RoudedRectangle from "@/components/RoundedRectangle";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Testing that this is a page</Text>
      <RoudedRectangle
        color={"purple"}
        type="set"
        onPress={() => alert("clicked")}
      />
    </View>
  );
}
