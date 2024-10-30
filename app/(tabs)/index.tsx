// HomeScreen.tsx
import React from "react";
import SplashScreenComponent from "@/components/Screens/SplashScreenComponent";
import Login from "@/components/Screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "@/components/Screens/Register";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreenComponent} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
