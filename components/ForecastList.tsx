import React from "react";
import { View, Text } from "react-native";
import { weatherForecastType } from "../types/weatherForecastType";

type propsType = {
  forecast: weatherForecastType | undefined;
};

const ForecastList = (props: propsType) => {
  console.log(props.forecast);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
};

export default ForecastList;
