import { Pressable, Text } from "react-native"

export default function CustomButton({
  title,
  onPress,
}: {
  title: string
  onPress: () => void
}) {
  return (
    <Pressable
      onPress={onPress}
      className="p-3 bg-blue-600 font-bold hover:bg-blue-700 border rounded-md w-40 items-center"
    >
      <Text className="text-white">{title}</Text>
    </Pressable>
  )
}
