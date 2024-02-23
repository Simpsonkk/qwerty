import { v4 } from 'uuid';

export const NEW_TRIP_DEFAULT_VALUES = {
  id: v4(),
  city: '',
  endDate: '',
  image: '',
  startDate: '',
};
export const CITY_PHOTOS = {
  uzhgorod: 'src/assets/images/cities/uzhgorod.jpg',
  kyiv: 'src/assets/images/cities/kyiv.jpg',
  poltava: 'src/assets/images/cities/poltava.jpg',
  odessa: 'src/assets/images/cities/odessa.jpg',
  mykolaiv: 'src/assets/images/cities/mykolaiv.jpg',
};
export const CITIES = Object.keys(CITY_PHOTOS);
