import { type PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  selectedTripCity: string;
};

const initialState: InitialState = {
  selectedTripCity: '',
};

const tripSlice = createSlice({
  name: 'trip',
  initialState,
  reducers: {
    saveSelectedTripCity: (state, action: PayloadAction<string>) => {
      state.selectedTripCity = action.payload;
    },
  },
});

export const { saveSelectedTripCity } = tripSlice.actions;
export const tripReducer = tripSlice.reducer;
