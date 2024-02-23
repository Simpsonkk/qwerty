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
import {
  HOURS_IN_DAY,
  MINUTES_IN_HOUR,
  ONE_MINUTE,
  SECONDS_IN_MINUTE,
  TIME_UNITS,
  ZERO,
} from '~/bundles/weather-forecast/components/today-weather/constants.js';
import { useGetWeatherForecastQuery } from '~/bundles/weather-forecast/redux/weather-api.js';

import styles from './styles.module.scss';

const TodayWeather: React.FC = () => {
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
    days: ZERO,
    hours: ZERO,
    minutes: ZERO,
    seconds: ZERO,
  });

  useEffect(() => {
    if (startDate) {
      const updateTimer = (): void => {
        const startDateParsed = parseISO(startDate);
        const currentDate = new Date();

        const daysDiff = differenceInDays(startDateParsed, currentDate);
        const hoursDiff = differenceInHours(startDateParsed, currentDate);
        const minutesDiff = differenceInMinutes(startDateParsed, currentDate);
        const secondsDiff = differenceInSeconds(startDateParsed, currentDate);

        setTimeDifference({
          days: Math.max(daysDiff, ZERO),
          hours: Math.max(hoursDiff % HOURS_IN_DAY, ZERO),
          minutes: Math.max(minutesDiff % MINUTES_IN_HOUR, ZERO),
          seconds: Math.max(secondsDiff % SECONDS_IN_MINUTE, ZERO),
        });
      };

      const intervalId = setInterval(updateTimer, ONE_MINUTE);

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
            <b className={styles.weekDay}>
              {isSuccess &&
                format(new Date(todayForecast.days[ZERO].datetime), 'EEEE')}
            </b>
            <div className={styles.temperatureWrapper}>
              <img
                className={styles.image}
                src={`src/assets/images/weather-icons/${todayForecast?.days[ZERO].icon}.svg`}
                alt={todayForecast?.days[ZERO].icon}
              />
              <p className={styles.temperature}>
                {isSuccess && todayForecast.days[ZERO].temp}
                <sup className={styles.degree}>°C</sup>
              </p>
            </div>
            <p className={styles.city}>{city}</p>
          </div>
          <div className={styles.timer}>
            {TIME_UNITS.map((timeUnit) => (
              <div key={timeUnit} className={styles.timeWrapper}>
                <p className={styles.time}>
                  {
                    timeDifference[
                      timeUnit.toLowerCase() as keyof typeof timeDifference
                    ]
                  }
                </p>
                <p className={styles.timeUnit}>{timeUnit}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TodayWeather;
