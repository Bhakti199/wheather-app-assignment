import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useMainContext } from "../MainContext/MainContext";

export const InputCountry = ({ navigation }) => {
  const {
    setCountryInput,
    countryInput,
    setCapitalWheather,
    setCountryDetails,
    countryDetails,
  } = useMainContext();
  const submitClickHandler = async () => {
    let countryURL = "https://restcountries.com/v3.1/name/";
    await fetch(countryURL + countryInput)
      .then((res) => res.json())
      .then((data) => {
        let country = data.find(
          (country) =>
            country.name.common.toUpperCase() == countryInput.toUpperCase()
        );
        if (!country) {
          country = data.find((country) =>
            country.name.common
              .toUpperCase()
              .includes(countryInput.toUpperCase())
          );
        }
        setCapitalWheather({
          temperature: 0,
          weatherIcons: "",
          wind_speed: 0,
          precipitation: 0,
        });
        setCountryDetails({
          capital: country.capital[0],
          population: country.population,
          latitude: country.latlng[0],
          longitude: country.latlng[1],
          flag: country.flags.png,
        });
      })
      .catch((error) => console.error(error));
    navigation.navigate("Country");
  };

  return (
    <View style={styles.inputContainerStyle}>
      <TextInput
        style={styles.inputBox}
        placeholder={"Enter Country"}
        placeholderTextColor="#94a3b8"
        onChangeText={(text) => setCountryInput(text)}
      />
      <TouchableOpacity
        disabled={countryInput === ""}
        style={countryInput === "" ? styles.disabledButton : styles.buttonStyle}
        onPress={() => {
          submitClickHandler();
        }}
      >
        <Text
          style={
            countryInput === "" ? styles.disabledButtonText : styles.buttonText
          }
        >
          Submit
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#cbd5e1",
    width: 100,
    borderRadius: 5,
    paddingVertical: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  disabledButtonText: {
    fontSize: 18,
    color: "#64748b",
    letterSpacing: 0.5,
    textTransform: "capitalize",
  },
  inputBox: {
    width: 200,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 5,
    fontSize: 16,
    marginVertical: 10,
  },
  buttonStyle: {
    width: 100,
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
