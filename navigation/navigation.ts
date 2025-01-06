import { StackNavigationProp } from "@react-navigation/stack"

export type RootStackParamList = {
  Home: undefined
  Login: undefined
  Register: undefined
}

// Define the navigation prop types for each screen
export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Home"
>
export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>
export type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Register"
>
