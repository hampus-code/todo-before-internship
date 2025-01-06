import { View, Text, TextInput, Pressable } from "react-native"
import CustomButton from "../buttons/CustomButton"
import { HomeScreenProps, LoginScreenProps } from "../../_type/IProps"

export default function LoginScreen({ navigation }: LoginScreenProps) {
  return (
    <View className="items-center justify-center pt-60">
      <View className="items-center justify-center p-10 border rounded-3xl">
        <Text className="font-bold text-lg">Login</Text>
        <View className="items-center justify-center pt-10">
          <TextInput
            className="border rounded w-48 h-7 p-1"
            placeholder="Username"
            placeholderTextColor="black"
          ></TextInput>
          <TextInput
            className="border rounded w-48 h-7 p-1 mt-4 mb-4"
            placeholder="Password"
            placeholderTextColor="black"
          ></TextInput>
          <CustomButton title="Login" onPress={() => {}}></CustomButton>
        </View>
        <View className="items-center justify-center pt-10">
          <Pressable onPress={() => navigation.navigate("Register")}>
            <Text className="underline">
              Don't have an account? Register account
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
