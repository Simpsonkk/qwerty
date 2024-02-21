import styles from './styles.module.scss';

const WeatherCard: React.FC = () => {
  return (
    <li className={styles.card}>
      <p className={styles.weekday}>Monday</p>
      <img
        className={styles.image}
        src="src/assets/images/weather-icons/clear-day.svg"
        alt=""
      />
      <p>28°/21°</p>
    </li>
  );
};

export default WeatherCard;
