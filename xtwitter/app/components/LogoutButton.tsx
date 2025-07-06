import { TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { useLogout } from "@/hooks/useLogout";

const LogoutButton = () => {
  const { handleSignOut } = useLogout();
  return (
    <TouchableOpacity onPress={handleSignOut}>
      <Feather name="log-out" size={24} color={"#e0245e"} />
    </TouchableOpacity>
  );
};

export default LogoutButton;
