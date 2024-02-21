import { type Trip } from '~/bundles/weather-forecast/types/trip.type.js';

import styles from './styles.module.scss';

type Properties = {
  trip: Trip;
};

const TripCard: React.FC<Properties> = ({ trip }) => {
  return (
    <li className={styles.card}>
      <img className={styles.image} src={trip.image} alt={trip.city} />
      <div className={styles.textWrapper}>
        <b>{trip.city}</b>
        <p className={styles.date}>
          {trip.startDate} - {trip.endDate}
        </p>
      </div>
    </li>
  );
};

export default TripCard;
