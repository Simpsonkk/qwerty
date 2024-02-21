import WeatherCard from '~/bundles/weather-forecast/components/weather-card/weather-card.js';

import styles from './styles.module.scss';

const WeekWeatherForecast: React.FC = () => {
  return (
    <>
      <h3 className={styles.title}>Week</h3>
      <ul className={styles.weekWeatherForecast}>
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </ul>
    </>
  );
};

export default WeekWeatherForecast;
