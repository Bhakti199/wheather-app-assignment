import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DisplayCapitalWheather,
  DisplayCountryDetails,
  InputCountry,
} from "./Components";
import { MainContextProvider } from "./MainContext/MainContext";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <MainContextProvider initialRouteName="Home">
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={InputCountry}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="Country"
            component={DisplayCountryDetails}
            options={{ title: "Country" }}
          />
          <Stack.Screen
            name="Wheather"
            component={DisplayCapitalWheather}
            options={{ title: "Wheather" }}
          />
        </Stack.Navigator>
      </MainContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputCountry: {
    width: "10",
  },
  submitBtn: {
    width: "5",
  },
});
