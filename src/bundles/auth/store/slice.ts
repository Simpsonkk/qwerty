import { createSlice } from '@reduxjs/toolkit';

import { DataStatus } from '~/bundles/common/enums/data-status.enum.js';
import { type ValueOf } from '~/bundles/common/types/value-of.type.js';
import { tokenService } from '~/services/services.js';

import { type UserSignInRequestDto } from '../types/user-sign-in-request-dto.js';
import { signIn } from './actions.js';

type State = {
  currentUser: UserSignInRequestDto | null;
  dataStatus: ValueOf<typeof DataStatus>;
};

const initialState: State = {
  currentUser: null,
  dataStatus: DataStatus.IDLE,
};

const { actions, name, reducer } = createSlice({
  initialState,
  name: 'auth',
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signIn.fulfilled, (state, action) => {
        state.dataStatus = DataStatus.FULFILLED;
        state.currentUser = action.payload;
      })
      .addCase(signIn.pending, (state) => {
        state.dataStatus = DataStatus.PENDING;
      })
      .addCase(signIn.rejected, (state) => {
        state.dataStatus = DataStatus.REJECTED;
        state.currentUser = null;
        tokenService.removeToken();
      });
  },
});

export { actions, name, reducer };
export { type State };
