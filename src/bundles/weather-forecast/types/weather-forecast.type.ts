export type SelectedWeatherDay = {
  tempmax: string;
  tempmin: string;
  temp: string;
  icon: string;
  datetime: string;
};
export type WeatherForecast = {
  address: string;
  days: SelectedWeatherDay[];
};
