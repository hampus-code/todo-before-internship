import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Pressable,
} from "react-native";
import CustomButton from "../buttons/CustomButton";
import { HomeScreenProps } from "../../_type/IProps";

export default function RegisterScreen({ navigation }: HomeScreenProps) {
  return (
    <View className="items-center pt-60">
      <View className="items-center p-10 border rounded-3xl">
        <Text className="text-xl font-bold ">Registration</Text>

        <TextInput
          className="h-10 p-1 mt-5 border rounded-lg w-52"
          placeholder="Username.."
        ></TextInput>

        <TextInput
          className="h-10 p-1 mt-5 mb-5 border rounded-lg w-52"
          placeholder="Password.."
        ></TextInput>

        <CustomButton
          title={"Submit"}
          onPress={() => {
            console.log("Clicked 'submit'");
          }}
        ></CustomButton>

        <Pressable
          className="mt-5 "
          onPress={() => navigation.navigate("Login")}
        >
          <Text className="underline">
            Already have an account? click here to log in
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
