type SelectedWeatherDay = {
  tempmax: string;
  tempmin: string;
  icon: string;
  datetime: string;
};

export type WeatherForecast = {
  address: string;
  days: SelectedWeatherDay[];
};
