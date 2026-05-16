import { Pressable, Text, View } from "react-native";

type Props = {
  onPress: () => void;
  type: "Increment" | "Decrement";
};
export default function IncreaseDecreaseBtn({ onPress, type }: Props) {
  // TODO:
  // on Press does something
  // full width
  return (
    <Pressable onPress={onPress}>
      <Text>{type}</Text>
    </Pressable>
  );
}
