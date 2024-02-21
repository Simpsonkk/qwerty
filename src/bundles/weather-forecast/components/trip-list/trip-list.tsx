import { useAppSelector } from '~/bundles/common/hooks/hooks.js';
import AddTripCard from '~/bundles/weather-forecast/components/add-trip-card/add-trip-card.js';
import TripCard from '~/bundles/weather-forecast/components/trip-card/trip-card.js';

import styles from './styles.module.scss';

const TripList: React.FC = () => {
  const trips = useAppSelector((state) => state.trip.trips);

  return (
    <ul className={styles.tripList}>
      {trips.map((trip) => (
        <TripCard trip={trip} key={trip.id} />
      ))}
      <AddTripCard />
    </ul>
  );
};

export default TripList;
