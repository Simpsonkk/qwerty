import { mockedTrip } from '~/bundles/weather-forecast/mock/trip.mock.js';
import { type Trip } from '~/bundles/weather-forecast/types/trip.type.js';

const TRIP_KEY = 'trips';

export const TripService = {
  getTrips(): Trip[] {
    const trips = localStorage.getItem(TRIP_KEY);
    return trips ? JSON.parse(trips) : [mockedTrip];
  },

  saveTrips(trips: Trip[]): void {
    localStorage.setItem(TRIP_KEY, JSON.stringify(trips));
  },
};
