import { configureStore } from '@reduxjs/toolkit';

import { errorHandler } from '~/bundles/common/redux/error-middleware.js';
import { tripReducer } from '~/bundles/weather-forecast/redux/trip-slice.js';
import { weatherApi } from '~/bundles/weather-forecast/redux/weather-api.js';

export const store = configureStore({
  reducer: {
    trip: tripReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
    errorHandler,
    weatherApi.middleware,
  ],
});
