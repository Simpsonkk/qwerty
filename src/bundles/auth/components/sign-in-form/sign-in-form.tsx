import {
  Button,
  FormControl,
  FormLabel,
  Input,
} from '~/bundles/common/components/components.js';
import { useAppForm } from '~/bundles/common/hooks/hooks.js';

import { type UserSignInRequestDto } from '../../types/types.js';
import { userSignInValidationSchema } from '../../validation-schemas/validation-schemas.js';
import { DEFAULT_SIGN_IN_PAYLOAD } from './constants/constants.js';

type Properties = {
  onSubmit: (payload: UserSignInRequestDto) => void;
};

const SignInForm: React.FC<Properties> = ({ onSubmit }) => {
  const { control, errors, handleSubmit } = useAppForm<UserSignInRequestDto>({
    defaultValues: DEFAULT_SIGN_IN_PAYLOAD,
    validationSchema: userSignInValidationSchema,
  });

  const handleFormSubmit = (event_: React.BaseSyntheticEvent): void => {
    void handleSubmit(onSubmit)(event_);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input
          control={control}
          errors={errors}
          placeholder="user@email.com"
          name="email"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Password</FormLabel>
        <Input
          control={control}
          errors={errors}
          placeholder="********"
          type="password"
          name="password"
        />
      </FormControl>
      <Button label="submit" type="submit" />
    </form>
  );
};

export { SignInForm };
