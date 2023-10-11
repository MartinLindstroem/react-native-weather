export type weatherForecastType = {
  cod: string;
  message: number;
  cnt: number;
  list: {
    dt: 1696950000;
    main: {
      temp: 13.58;
      feels_like: 13.27;
      temp_min: 13.19;
      temp_max: 13.58;
      pressure: 1014;
      sea_level: 1014;
      grnd_level: 1013;
      humidity: 87;
      temp_kf: 0.39;
    };
    weather: [
      {
        id: 804;
        main: string;
        description: string;
        icon: string;
      }
    ];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    visibility: number;
    pop: number;
    sys: {
      pod: string;
    };
    dt_txt: string;
  }[];
  city: {
    id: number;
    name: string;
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    population: number;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};
