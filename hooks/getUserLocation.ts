import * as Location from "expo-location";

export const getUserLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync(); // Get the location permission from the user and extract the 'status' key from it.
  if (status !== "granted") {
    console.log("permission denied!");
    return;
  }

  try {
    const position = await Location.getCurrentPositionAsync({});
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    return { latitude, longitude };
  } catch (error) {
    console.log(error);
  }
};
