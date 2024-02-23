import { type ChangeEvent } from 'react';
import { v4 } from 'uuid';

import {
  useAppDispatch,
  useAppSelector,
  useState,
} from '~/bundles/common/hooks/hooks.js';
import AddTripCard from '~/bundles/weather-forecast/components/add-trip-card/add-trip-card.js';
import CreateTripModal from '~/bundles/weather-forecast/components/add-trip-modal/add-trip-modal.js';
import TripCard from '~/bundles/weather-forecast/components/trip-card/trip-card.js';
import {
  CITIES,
  CITY_PHOTOS,
  NEW_TRIP_DEFAULT_VALUES,
} from '~/bundles/weather-forecast/components/trip-list/constants.js';
import { saveNewTrip } from '~/bundles/weather-forecast/redux/trip-slice.js';
import { type Trip } from '~/bundles/weather-forecast/types/trip.type.js';

import styles from './styles.module.scss';

const TripList: React.FC = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [newTrip, setNewTrip] = useState<Trip>(NEW_TRIP_DEFAULT_VALUES);

  const filteredTrips = useAppSelector((state) => state.trip.filteredTrips);

  const dispatch = useAppDispatch();

  const handleModalToggle = (): void => setIsModalActive(!isModalActive);

  const handleNewTrip = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ): void => {
    const updatedTrips =
      event.target.name === 'city'
        ? {
            ...newTrip,
            city: event.target.value,
            image:
              CITY_PHOTOS[
                event.target.value.toLowerCase() as keyof typeof CITY_PHOTOS
              ],
            id: v4(),
          }
        : { ...newTrip, [event.target.name]: event.target.value };

    setNewTrip(updatedTrips);
  };

  const handleAddNewTrip = (): void => {
    dispatch(saveNewTrip(newTrip));
    setNewTrip(NEW_TRIP_DEFAULT_VALUES);
    handleModalToggle();
  };

  return (
    <ul className={styles.tripList}>
      {filteredTrips.map((trip) => (
        <TripCard trip={trip} key={trip.id} />
      ))}
      <AddTripCard onOpenModal={handleModalToggle} />
      <CreateTripModal
        isActive={isModalActive}
        title="Create trip"
        onClose={handleModalToggle}
        footerChildren={
          <div className={styles.buttonsWrapper}>
            <button onClick={handleModalToggle} className={styles.cancelButton}>
              Cancel
            </button>
            <button disabled={Object.values(newTrip).includes('')} onClick={handleAddNewTrip} className={styles.saveButton}>
              Save
            </button>
          </div>
        }
      >
        <>
          <label className={styles.dateLabel} htmlFor="city">
            <span className={styles.required}>* </span>
            City
          </label>
          <select
            value={newTrip.city}
            onChange={handleNewTrip}
            name="city"
            className={styles.datePicker}
            id="city"
          >
            <option value="">Please select a city</option>
            {CITIES.map((city) => {
              const formattedCityName =
                city.slice(0, 1).toUpperCase() + city.slice(1);

              return (
                <option value={formattedCityName} key={formattedCityName}>
                  {formattedCityName}
                </option>
              );
            })}
          </select>

          <label className={styles.dateLabel} htmlFor="startDate">
            <span className={styles.required}>* </span>
            Start date
          </label>
          <input
            value={newTrip.startDate}
            onChange={handleNewTrip}
            name="startDate"
            className={styles.datePicker}
            type="date"
            id="startDate"
          />

          <label className={styles.dateLabel} htmlFor="endDate">
            <span className={styles.required}>* </span>
            End date
          </label>
          <input
            value={newTrip.endDate}
            onChange={handleNewTrip}
            name="endDate"
            className={styles.datePicker}
            type="date"
            id="endDate"
          />
        </>
      </CreateTripModal>
    </ul>
  );
};

export default TripList;
