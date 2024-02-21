import { createAsyncThunk } from '@reduxjs/toolkit';

import { type AsyncThunkConfig } from '~/bundles/common/types/async-thunk-config.type.js';
import { tokenService } from '~/services/services.js';

import { AuthApiPath } from '../enums/enums.js';
import { type UserSignInRequestDto } from '../types/user-sign-in-request-dto.js';
import { type UserSignInResponseDto } from '../types/user-sign-in-response-dto.js';
import { name as sliceName } from './slice.js';

const signIn = createAsyncThunk<
  UserSignInResponseDto,
  UserSignInRequestDto,
  AsyncThunkConfig
>(
  `${sliceName}${AuthApiPath.SIGN_IN}`,
  async (loginPayload, { extra: { authApi } }) => {
    const data = await authApi.signIn(loginPayload);
    tokenService.saveToken(data.token);
    return data;
  },
);

export { signIn };
