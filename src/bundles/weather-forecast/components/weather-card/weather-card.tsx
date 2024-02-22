import { format } from 'date-fns';

import { type SelectedWeatherDay } from '~/bundles/weather-forecast/types/weather-forecast.type.js';

import styles from './styles.module.scss';

type Properties = {
  dayForecast: SelectedWeatherDay;
};

const WeatherCard: React.FC<Properties> = ({ dayForecast }) => {
  return (
    <li className={styles.card}>
      <p className={styles.weekday}>
        {format(new Date(dayForecast.datetime), 'EEEE')}
      </p>
      <img
        className={styles.image}
        src={`src/assets/images/weather-icons/${dayForecast.icon}.svg`}
        alt={dayForecast.icon}
      />
      <p>
        {dayForecast.tempmax}°/{dayForecast.tempmin}°
      </p>
    </li>
  );
};

export default WeatherCard;
