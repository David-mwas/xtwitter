import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useClerk, } from "@clerk/clerk-expo";

const HomeScreen = () => {
  const { signOut } = useClerk();
  return (
    <View>
      <Text>index</Text>
      <TouchableOpacity onPress={() => signOut()}>
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
