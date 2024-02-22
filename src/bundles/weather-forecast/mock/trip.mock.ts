import { v4 } from 'uuid';

import { type Trip } from '~/bundles/weather-forecast/types/trip.type.js';

export const mockedTrip: Trip = {
  id: v4(),
  city: 'Kharkiv',
  image: 'src/assets/images/cities/kharkiv.jpg',
  startDate: '2024-03-01',
  endDate: '2024-03-06',
};
