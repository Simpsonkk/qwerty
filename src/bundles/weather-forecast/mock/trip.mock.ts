import { v4 } from 'uuid';

import { type Trip } from '~/bundles/weather-forecast/types/trip.type.js';

export const mockedTrip: Trip = {
  id: v4(),
  city: 'Kharkiv',
  image: 'src/assets/images/cities/kharkiv.jpg',
  startDate: '2023-03-01',
  endDate: '2023-03-06',
};
