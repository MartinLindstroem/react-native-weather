import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import * as Location from "expo-location";

import { getCurrentWeather } from "../hooks/getWeatherData";
import { getWeatherForecast } from "../hooks/getWeatherData";
import { getUserLocation } from "../hooks/getUserLocation";
import { currentWeatherType } from "../types/currentWeatherType";
import ForecastList from "../components/ForecastList";

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState<currentWeatherType>();
  const [weatherForecast, setWeatherForecast] = useState();
  const [userLocation, setUserLocation] = useState<
    | {
        latitude: number;
        longitude: number;
      }
    | undefined
  >({ latitude: 0, longitude: 0 });

  useEffect(() => {
    const getLocation = async () => {
      const userCoordinates = await getUserLocation();

      setUserLocation(userCoordinates);
    };

    getLocation();
  }, []);

  useEffect(() => {
    const getWeather = async () => {
      if (userLocation) {
        const weather = await getCurrentWeather(
          userLocation?.latitude,
          userLocation?.longitude
        );

        const forecast = await getWeatherForecast(
          userLocation?.latitude,
          userLocation?.longitude
        );
        setCurrentWeather(weather);
        setWeatherForecast(forecast);
      }
    };

    getWeather();
  }, [userLocation]);

  console.log("USERLOCATION", userLocation);
  console.log("WEATHER", currentWeather);

  return (
    <View style={styles.container}>
      <Text>{currentWeather?.name}</Text>
      <View>
        <Image
          style={styles.logo}
          source={{
            uri: `https://openweathermap.org/img/w/${currentWeather?.weather[0].icon}.png` as any,
          }}
        />
        <Text>{currentWeather?.weather[0]?.description}</Text>
        <Text>{currentWeather?.main.temp}</Text>
      </View>
      <ForecastList forecast={weatherForecast} />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    height: 50,
    width: 50,
  },
});

export default Home;
