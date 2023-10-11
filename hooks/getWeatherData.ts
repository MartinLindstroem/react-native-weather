export const getCurrentWeather = async (lat: number, lon: number) => {
  try {
    const currentWeather = await fetch(
      `http://192.168.0.9:8080/weather/current-weather?lat=${lat}&lon=${lon}`
    ).then((response) => response.json());
    return currentWeather;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherForecast = async (lat: number, lon: number) => {
  try {
    const weatherForecast = await fetch(
      `http://192.168.0.9:8080/weather/forecast?lat=${lat}&lon=${lon}`
    ).then((response) => response.json());
    return weatherForecast;
  } catch (error) {
    console.log(error);
  }
};
