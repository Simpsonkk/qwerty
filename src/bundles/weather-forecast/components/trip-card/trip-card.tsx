import { getValidClassNames } from '~/bundles/common/helpers/get-valid-class-names.helper.js';
import {
  useAppDispatch,
  useAppSelector,
} from '~/bundles/common/hooks/hooks.js';
import { saveSelectedTrip } from '~/bundles/weather-forecast/redux/trip-slice.js';
import { type Trip } from '~/bundles/weather-forecast/types/trip.type.js';

import styles from './styles.module.scss';

type Properties = {
  trip: Trip;
};

const TripCard: React.FC<Properties> = ({ trip }) => {
  const dispatch = useAppDispatch();

  const selectedTrip = useAppSelector((state) => state.trip.selectedTrip);

  const selectTrip = (): void => void dispatch(saveSelectedTrip(trip));

  return (
    <li
      className={getValidClassNames(
        styles.card,
        selectedTrip.id === trip.id ? styles.selectedCard : '',
      )}
      onClick={selectTrip}
    >
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
