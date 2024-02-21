import AddTripCard from '~/bundles/weather-forecast/components/add-trip-card/add-trip-card.js';
import TripCard from '~/bundles/weather-forecast/components/trip-card/trip-card.js';

import styles from './styles.module.scss';

const TripList: React.FC = () => {
  return (
    <ul className={styles.tripList}>
      <TripCard />
      <TripCard />
      <TripCard />
      <TripCard />
      <TripCard />
      <AddTripCard />
    </ul>
  );
};

export default TripList;
