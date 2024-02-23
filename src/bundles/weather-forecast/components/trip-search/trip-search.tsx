import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ChangeEvent } from 'react';

import {
  useAppDispatch,
  useAppSelector,
} from '~/bundles/common/hooks/hooks.js';
import {
  saveFilteredTrips,
  saveSelectedTrip,
} from '~/bundles/weather-forecast/redux/trip-slice.js';

import styles from './styles.module.scss';

const TripSearch: React.FC = () => {
  const trips = useAppSelector((state) => state.trip.trips);
  const filteredTrips = useAppSelector((state) => state.trip.filteredTrips);
  const selectedTrip = useAppSelector((state) => state.trip.selectedTrip);

  const dispatch = useAppDispatch();

  const handleSearchTerm = (event: ChangeEvent<HTMLInputElement>): void => {
    dispatch(
      saveFilteredTrips(
        trips.filter((trip) =>
          trip.city
            .toLowerCase()
            .includes(event.target.value.toLowerCase().trim()),
        ),
      ),
    );
  };

  const handleNextTrip = (): void => {
    const nextTripIndex = filteredTrips.findIndex(
      (trip) => trip.city === selectedTrip.city,
    );

    dispatch(
      saveSelectedTrip(
        nextTripIndex + 1 < filteredTrips.length
          ? filteredTrips[nextTripIndex + 1]
          : filteredTrips[filteredTrips.length - 1],
      ),
    );
  };

  const handlePreviousTrip = (): void => {
    const nextTripIndex = filteredTrips.findIndex(
      (trip) => trip.city === selectedTrip.city,
    );

    dispatch(
      saveSelectedTrip(
        nextTripIndex - 1 < 0
          ? filteredTrips[0]
          : filteredTrips[nextTripIndex - 1],
      ),
    );
  };
  return (
    <>
      <h2 className={styles.title}>
        Weather <b>Forecast</b>
      </h2>
      <div className={styles.wrapper}>
        <div className={styles.inputWrapper}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faMagnifyingGlass}
            size="lg"
          />
          <input
            className={styles.input}
            onChange={handleSearchTerm}
            placeholder="Search your trip"
          />
        </div>
        <button onClick={handleNextTrip} className={styles.button}>
          Next
        </button>
        <button onClick={handlePreviousTrip} className={styles.button}>Previous</button>
      </div>
    </>
  );
};

export default TripSearch;
