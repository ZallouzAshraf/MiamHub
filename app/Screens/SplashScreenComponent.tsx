// SplashScreenComponent.tsx
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "@react-navigation/native";

const SplashScreenComponent: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 3500);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/lotties/splashanim.json")}
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: "100%",
    height: "100%",
  },
});

export default SplashScreenComponent;
