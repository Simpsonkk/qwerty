import { type PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { TripService } from '~/bundles/weather-forecast/services/trip-service.js';
import { type Trip } from '~/bundles/weather-forecast/types/trip.type.js';

type InitialState = {
  selectedTrip: Trip;
  trips: Trip[];
};

const trips = TripService.getTrips();

const initialState: InitialState = {
  selectedTrip: trips[0],
  trips: trips,
};

const tripSlice = createSlice({
  name: 'tripSlice',
  initialState,
  reducers: {
    saveSelectedTrip: (state, action: PayloadAction<Trip>) => {
      state.selectedTrip = action.payload;
    },
  },
});

export const { saveSelectedTrip } = tripSlice.actions;
export const tripReducer = tripSlice.reducer;
