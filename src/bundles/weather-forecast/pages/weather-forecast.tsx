import TodayWeather from '~/bundles/weather-forecast/components/today-weather/today-weather.js';
import TripWeatherForecast from '~/bundles/weather-forecast/components/trip-weather-forecast/trip-weather-forecast.js';

import styles from './styles.module.scss';

const WeatherForecast: React.FC = () => {
  // const { data, isLoading } = useGetWeatherForecastQuery({
  //   city: 'Kharkiv',
  //   startDate: '2024-02-21',
  //   endDate: '2024-02-26',
  // });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <main className={styles.wrapper}>
      <TripWeatherForecast />
      <TodayWeather />
    </main>
  );
};

export default WeatherForecast;
