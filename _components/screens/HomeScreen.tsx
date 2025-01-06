// /src/components/screens/HomeScreen.tsx

import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CustomButton from "../buttons/CustomButton";
import { HomeScreenProps } from "../../_type/IProps";

function HomeScreen({ navigation }: HomeScreenProps) {
  console.log(navigation);

  return (
    <View>
      <View className="flex items-center justify-center pt-20">
        <Text className="text-lg italic font-medium">BookNest</Text>
      </View>
      <View className="flex items-center justify-center gap-5 pt-72">
        <CustomButton
          title={"Login"}
          onPress={() => navigation.navigate("Login")}
        />
        <CustomButton
          title={"Register"}
          onPress={() => navigation.navigate("Register")}
        />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

export default HomeScreen;
