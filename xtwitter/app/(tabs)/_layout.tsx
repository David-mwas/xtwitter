import React from "react";
import { Redirect, Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useAuth } from "@clerk/clerk-expo";
const TabLayout = () => {
  const insets = useSafeAreaInsets();

  const { isSignedIn } = useAuth();
  if (!isSignedIn) return <Redirect href={"/(auth)"} />;
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#1da1f2",
        tabBarInactiveTintColor: "#657786",
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#e1e8ed",
          height: 50 + insets.bottom,
          paddingTop: 8,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
          tabBarLabel: "Search",
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="bell" size={size} color={color} />
          ),
          tabBarLabel: "Notification",
        }}
      />
      <Tabs.Screen
        name="message"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="mail" size={size} color={color} />
          ),
          tabBarLabel: "Messages",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
