// HomeScreen.tsx
import React from "react";
import SplashScreenComponent from "@/app/Screens/SplashScreenComponent";
import Login from "@/app/Screens/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "@/app/Screens/Register";
import Accueil from "./Screens/Accueil";
import { StatusBar } from "react-native";

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
  return (
    <>
      <StatusBar barStyle="default" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreenComponent} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Accueil" component={Accueil} />
      </Stack.Navigator>
    </>
  );
}
