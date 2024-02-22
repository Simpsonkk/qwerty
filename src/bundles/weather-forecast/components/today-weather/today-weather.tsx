import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
  format,
  parseISO,
} from 'date-fns';
import { useEffect, useState } from 'react';

import Loader from '~/bundles/common/components/loader/loader.js';
import { useAppSelector } from '~/bundles/common/hooks/hooks.js';
import { useGetWeatherForecastQuery } from '~/bundles/weather-forecast/redux/weather-api.js';

import styles from './styles.module.scss';

const TodayWeather: React.FC = () => {
  // TODO: separate timer

  const { city, startDate } = useAppSelector(
    (state) => state.trip.selectedTrip,
  );

  const {
    data: todayForecast,
    isSuccess,
    isLoading,
  } = useGetWeatherForecastQuery({
    city,
  });

  const [timeDifference, setTimeDifference] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (startDate) {
      const updateTimer = () => {
        const startDateParsed = parseISO(startDate);
        const currentDate = new Date();

        const daysDiff = differenceInDays(startDateParsed, currentDate);
        const hoursDiff = differenceInHours(startDateParsed, currentDate);
        const minutesDiff = differenceInMinutes(startDateParsed, currentDate);
        const secondsDiff = differenceInSeconds(startDateParsed, currentDate);

        setTimeDifference({
          days: Math.max(daysDiff, 0),
          hours: Math.max(hoursDiff % 24, 0),
          minutes: Math.max(minutesDiff % 60, 0),
          seconds: Math.max(secondsDiff % 60, 0),
        });
      };

      const intervalId = setInterval(updateTimer, 1000);

      return () => clearInterval(intervalId);
    }
  }, [startDate]);

  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={styles.weather}>
            <b>
              {isSuccess &&
                format(new Date(todayForecast.days[0].datetime), 'EEEE')}
            </b>
            <div className={styles.temperatureWrapper}>
              <img
                className={styles.image}
                src={`src/assets/images/weather-icons/${todayForecast?.days[0].icon}.svg`}
                alt={todayForecast?.days[0].icon}
              />
              <p className={styles.temperature}>
                {isSuccess && todayForecast.days[0].temp}
                <sup className={styles.degree}>°C</sup>
              </p>
            </div>
            <p className={styles.city}>{city}</p>
          </div>
          <div className={styles.timer}>
            <div className={styles.timeWrapper}>
              <p className={styles.time}>{timeDifference.days}</p>
              <p className={styles.timeUnit}>DAYS</p>
            </div>
            <div className={styles.timeWrapper}>
              <p className={styles.time}>{timeDifference.hours}</p>
              <p className={styles.timeUnit}>HOURS</p>
            </div>
            <div className={styles.timeWrapper}>
              <p className={styles.time}>{timeDifference.minutes}</p>
              <p className={styles.timeUnit}>MINUTES</p>
            </div>
            <div className={styles.timeWrapper}>
              <p className={styles.time}>{timeDifference.seconds}</p>
              <p className={styles.timeUnit}>SECONDS</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TodayWeather;
