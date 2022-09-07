import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useMainContext } from "../MainContext/MainContext";

export const DisplayCountryDetails = ({ navigation }) => {
  const { countryDetails, setCapitalWheather } = useMainContext();
  let wheatherURL =
    "http://api.weatherstack.com/current?access_key=0fbf43ff9a2b9e1a4503d034f030b3d3&query=";

  const capitalWheatherHandler = async () => {
    console.log(wheatherURL + countryDetails.capital);
    await fetch(wheatherURL + countryDetails.capital)
      .then((res) => res.json())
      .then((data) => {
        setCapitalWheather({
          temperature: data.current.temperature,
          weatherIcons: data.current.weather_icons[0],
          wind_speed: data.current.wind_speed,
          precipitation: data.current.precip,
        });
      })
      .catch((error) => console.error(error));
    navigation.navigate("Wheather");
  };

  return (
    <View style={styles.countryDetailsContainer}>
      <Text style={styles.titleStyle}>Country Details</Text>
      <Image
        source={{
          uri:
            countryDetails.flag ||
            "https://freesvg.org/img/countries_flags.png",
        }}
        style={styles.flag}
      />
      <Text style={styles.textStyle}>Capital : {countryDetails.capital}</Text>
      <Text style={styles.textStyle}>
        Country's population : {countryDetails.population}
      </Text>
      <Text style={styles.textStyle}>Latitude : {countryDetails.latitude}</Text>
      <Text style={styles.textStyle}>
        Longitude : {countryDetails.longitude}
      </Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => {
          capitalWheatherHandler();
        }}
      >
        <Text style={styles.buttonText}>Capital Wheather</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  countryDetailsContainer: {
    flex: 1,
    padding: 30,
  },
  titleStyle: {
    textAlign: "center",
    fontSize: 22,
    color: "#0f172a",
    paddingBottom: 20,
  },
  flag: {
    width: "12rem",
    height: "9rem",
    paddingVertical: 15,
  },
  textStyle: {
    color: "#64748b",
    fontSize: 17,
    paddingVertical: 15,
  },
  buttonStyle: {
    width: 200,
    backgroundColor: "#6200EE",
    borderRadius: 5,
    paddingVertical: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#f8fafc",
    letterSpacing: 0.5,
    textTransform: "capitalize",
  },
});
