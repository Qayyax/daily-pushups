import { StyleSheet, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { colors } from "@/constants/color";

type Props = {
  quote: string;
  source: string;
};

export default function QuotesCard({ quote, source }: Props) {
  return (
    <View style={styles.container}>
      {/* icon here */}
      <View style={styles.quoteIcon}>
        <FontAwesome name="quote-left" size={24} color={colors.primary} />
      </View>
      <View>
        <Text style={styles.primaryText}>{quote}</Text>
        <Text>{source}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 20,
    width: "100%",
    flexDirection: "row",
    gap: 16,
    backgroundColor: colors.lightContainerBg,
    borderWidth: 2,
  },
  quoteIcon: {
    padding: 4,
    backgroundColor: colors.midPurple,
    borderRadius: 8,
  },
  textContainer: {
    gap: 5,
  },
  primaryText: {
    fontWeight: "bold",
  },
});
