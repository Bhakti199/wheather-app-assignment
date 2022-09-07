export type MainContextType = {
  countryInput: string;
  setCountryInput: (countryInput: string) => void;

  countryDetails: {
    capital: string;
    population: number;
    latitude: number;
    longitude: number;
    flag: string;
  };
  capitalWheather: {
    temperature: number;
    weatherIcons: string;
    wind_speed: number;
    precipitation: number;
  };
  setCapitalWheather: (capitalWheather: object) => void;
  setCountryDetails: (countryDetails: object) => void;
  // capitalWheatherHandler: () => void;
};
