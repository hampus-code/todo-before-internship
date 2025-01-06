import { StatusBar } from "expo-status-bar"
import { Pressable, StyleSheet, Text, View } from "react-native"
import "./global.css"
import CustomButton from "./_components/buttons/CustomButton"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { RootStackParamList } from ".//navigation/navigation"
import HomeScreen from "./_components/screens/HomeScreen"
import LoginScreen from "./_components/screens/LoginScreen"
import RegisterScreen from "./_components/screens/RegisterScreen"

const Stack = createStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
