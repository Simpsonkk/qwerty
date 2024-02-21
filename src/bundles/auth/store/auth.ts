import { signIn } from './actions.js';
import { actions } from './slice.js';

const allActions = {
  ...actions,
  signIn
};

export { AuthApi as authApi } from './auth-api.js';
export { allActions as actions };
export { reducer, type State } from './slice.js';