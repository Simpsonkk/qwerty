import styles from './styles.module.scss';

const TodayWeather: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.weather}>
        <b>Sunday</b>
        <div className={styles.temperatureWrapper}>
          <img
            className={styles.image}
            src="src/assets/images/weather-icons/rain.svg"
            alt=""
          />
          <p className={styles.temperature}>
            24<sup className={styles.degree}>°C</sup>
          </p>
        </div>
        <p className={styles.city}>Kharkiv</p>
      </div>
      <div className={styles.timer}>
        <div className={styles.timeWrapper}>
          <p className={styles.time}>30</p>
          <p className={styles.timeUnit}>DAYS</p>
        </div>
        <div className={styles.timeWrapper}>
          <p className={styles.time}>30</p>
          <p className={styles.timeUnit}>HOURS</p>
        </div>
        <div className={styles.timeWrapper}>
          <p className={styles.time}>30</p>
          <p className={styles.timeUnit}>MINUTES</p>
        </div>
        <div className={styles.timeWrapper}>
          <p className={styles.time}>30</p>
          <p className={styles.timeUnit}>SECONDS</p>
        </div>
      </div>
    </div>
  );
};

export default TodayWeather;
