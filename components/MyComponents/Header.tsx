import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Style/styles";

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.title}>Order Your Favorite Food!</Text>
    <Ionicons name="notifications-outline" size={30} color="#fcb823" />
  </View>
);

export default Header;
