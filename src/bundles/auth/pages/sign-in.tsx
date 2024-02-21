import { useAppDispatch } from '~/bundles/common/hooks/hooks.js';

import { SignInForm } from '../components/components.js';
import { actions as authActions } from '../store/auth.js';
import { type UserSignInRequestDto } from '../types/user-sign-in-request-dto.js';

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (payload: UserSignInRequestDto): void => {
    void dispatch(authActions.signIn(payload));
  };

  return <SignInForm onSubmit={handleSubmit} />;
};

export { SignIn };
