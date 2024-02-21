import TripList from '~/bundles/weather-forecast/components/trip-list/trip-list.js';
import TripSearch from '~/bundles/weather-forecast/components/trip-search/trip-search.js';
import WeekWeatherForecast from '~/bundles/weather-forecast/components/week-weather-forecast/week-weather-forecast.js';

import styles from './styles.module.scss';

const TripWeatherForecast: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <TripSearch />
      <TripList />
      <WeekWeatherForecast />
    </div>
  );
};

export default TripWeatherForecast;
