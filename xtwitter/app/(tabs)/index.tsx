import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoutButton from "../components/LogoutButton";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <Text>Home</Text>
      <LogoutButton />
    </SafeAreaView>
  );
};

export default HomeScreen;
