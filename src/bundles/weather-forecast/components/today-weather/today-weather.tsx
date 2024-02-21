import styles from './styles.module.scss';

const TodayWeather: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.weather}>
        <p>Sunday</p>
        <div>
          <img className={styles.image} src="src/assets/images/weather-icons/rain.svg" alt="" />
          <p>
            24<sup>°C</sup>
          </p>
          <p>Kharkiv</p>
        </div>
      </div>
      <div className={styles.timer}>
        <p>30</p>
        <p>DAYS</p>
        <p>30</p>
        <p>HOURS</p>
        <p>30</p>
        <p>MINUTES</p>
        <p>30</p>
        <p>SECONDS</p>
      </div>
    </div>
  );
};

export default TodayWeather;
