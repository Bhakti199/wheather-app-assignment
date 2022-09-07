import { createContext, useContext } from "react";
import { useState } from "react";
import { MainContextType } from "./MainContext.types";
const MainContext = createContext({} as MainContextType);

export const MainContextProvider = ({ children }) => {
  const [countryInput, setCountryInput] = useState("");
  const [countryDetails, setCountryDetails] = useState({
    capital: "",
    population: 0,
    latitude: 0,
    longitude: 0,
    flag: "",
  });
  const [capitalWheather, setCapitalWheather] = useState({
    temperature: 0,
    weatherIcons: "",
    wind_speed: 0,
    precipitation: 0,
  });

  return (
    <MainContext.Provider
      value={{
        countryInput,
        setCountryInput,
        countryDetails,
        capitalWheather,
        setCapitalWheather,
        setCountryDetails,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useMainContext = () => useContext(MainContext);

export { useMainContext };
