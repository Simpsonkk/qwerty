import { useAppSelector } from '~/bundles/common/hooks/hooks.js';
import WeatherCard from '~/bundles/weather-forecast/components/weather-card/weather-card.js';
import { useGetWeatherForecastQuery } from '~/bundles/weather-forecast/redux/weather-api.js';

import styles from './styles.module.scss';

const WeekWeatherForecast: React.FC = () => {
  const { city, endDate, startDate } = useAppSelector(
    (state) => state.trip.selectedTrip,
  );

  const { data: weekForecast, isSuccess } = useGetWeatherForecastQuery({
    city,
    startDate,
    endDate,
  });

  return (
    <>
      <h3 className={styles.title}>Week</h3>
      <ul className={styles.weekWeatherForecast}>
        {isSuccess &&
          weekForecast.days.map((dayForecast) => (
            <WeatherCard dayForecast={dayForecast} key={dayForecast.datetime} />
          ))}
      </ul>
    </>
  );
};

export default WeekWeatherForecast;
