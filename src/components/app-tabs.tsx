import { Colors } from "@/constants/theme";
import { NativeTabs } from "expo-router/unstable-native-tabs";
import React from "react";
import { useColorScheme } from "react-native";

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === "unspecified" ? "light" : scheme];

  return (
    <NativeTabs
      backgroundColor={"#f6effb"}
      indicatorColor={"#ead3fb"}
      iconColor={{ selected: "#C78BF6" }}
      labelStyle={{ selected: { color: "#C78BF6" } }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="house"
          md="home"
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="alta">
        <NativeTabs.Trigger.Label>Em alta</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="flame"
          md="local_fire_department"
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="busca">
        <NativeTabs.Trigger.Label>Busca</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="magnifyingglass"
          md="search"
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="carrinho">
        <NativeTabs.Trigger.Label>Carrinho</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="cart"
          md="shopping_cart"
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="perfil">
        <NativeTabs.Trigger.Label>Perfil</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="person"
          md="person"
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
