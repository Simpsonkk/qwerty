import { type PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TripService } from '~/bundles/weather-forecast/services/trip-service.js';
import { type Trip } from '~/bundles/weather-forecast/types/trip.type.js';

type InitialState = {
  selectedTripCity: string;
  trips: Trip[];
};

const initialState: InitialState = {
  selectedTripCity: '',
  trips: TripService.getTrips(),
};

const tripSlice = createSlice({
  name: 'tripSlice',
  initialState,
  reducers: {
    saveSelectedTripCity: (state, action: PayloadAction<string>) => {
      state.selectedTripCity = action.payload;
    },
  },
});

export const { saveSelectedTripCity } = tripSlice.actions;
export const tripReducer = tripSlice.reducer;
