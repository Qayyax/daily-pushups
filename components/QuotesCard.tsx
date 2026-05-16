// TODO:
// [x] Rounded rectangle
// [] hstack with 2 components
//  [] quotes icon
//  [] Vstack text - primary and secondary

import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type Props = {
  quote: string;
  source: string;
};

export default function QuotesCard({ quote, source }: Props) {
  return (
    <View style={styles.container}>
      {/* icon here */}
      <View className="p-2 bg-purple-200 rounded-lg">
        <FontAwesome name="quote-left" size={24} color="purple" />
      </View>
      <View>
        <Text>{quote}</Text>
        <Text>{source}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 10,
    width: "100%",
    flexDirection: "row",
    gap: 10,
  },
});
