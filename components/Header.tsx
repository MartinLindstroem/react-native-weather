import React from "react";
import { View, Text } from "react-native";

type propsType = {
  city: string;
  currentWeather: string;
};

const Header = (props: propsType) => {
  return (
    <View>
      <Text>{props.city}</Text>
      <Text>{props.currentWeather}</Text>
    </View>
  );
};

export default Header;
