import { type PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { MINUS_ONE, ONE } from '~/bundles/weather-forecast/redux/constants.js';
import { TripService } from '~/bundles/weather-forecast/services/trip-service.js';
import { type Trip } from '~/bundles/weather-forecast/types/trip.type.js';

type InitialState = {
  selectedTrip: Trip;
  trips: Trip[];
  filteredTrips: Trip[];
};

const trips = TripService.getTrips();

const initialState: InitialState = {
  selectedTrip: trips[0],
  trips: trips,
  filteredTrips: trips,
};

const tripSlice = createSlice({
  name: 'tripSlice',
  initialState,
  reducers: {
    saveSelectedTrip: (state, action: PayloadAction<Trip>) => {
      state.selectedTrip = action.payload;
    },
    saveNewTrip: (state, action: PayloadAction<Trip>) => {
      state.trips.push(action.payload);
      state.trips.sort((a, b) => (a.startDate > b.startDate ? ONE : MINUS_ONE));
      state.filteredTrips = state.trips;
      TripService.saveTrips(state.trips);
    },
    saveFilteredTrips: (state, action: PayloadAction<Trip[]>) => {
      state.filteredTrips = action.payload;
    },
  },
});

export const { saveSelectedTrip, saveNewTrip, saveFilteredTrips } =
  tripSlice.actions;
export const tripReducer = tripSlice.reducer;
