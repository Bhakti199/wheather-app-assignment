import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useMainContext } from "../MainContext/MainContext";

export const DisplayCapitalWheather = () => {
  const { capitalWheather } = useMainContext();

  return (
    <View style={styles.wheatherDetailesContainer}>
      <Text style={styles.titleStyle}>Wheather Details</Text>
      <Image
        source={{ uri: capitalWheather.weatherIcons }}
        style={styles.wheatherIcons}
      />
      <Text style={styles.textStyle}>
        Temperature : {capitalWheather.temperature} C
      </Text>
      <Text style={styles.textStyle}>
        Precipitation : {capitalWheather.precipitation} %
      </Text>
      <Text style={styles.textStyle}>
        Wind Speed : {capitalWheather.wind_speed} kmph
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  wheatherDetailesContainer: {
    flex: 1,
    padding: 50,
  },
  wheatherIcons: {
    width: 100,
    height: 100,
  },
  textStyle: {
    color: "#64748b",
    fontSize: 17,
    paddingVertical: 15,
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 22,
    color: "#0f172a",
    paddingBottom: 20,
  },
});
