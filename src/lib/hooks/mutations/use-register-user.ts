import { registerUser } from '@/api/mutations';
import { useMutation } from '@tanstack/react-query';

// ----------------------------------------------------------------

interface IMutationFnArgs {
  password: string;
  userName: string;
  email: string;
}

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: ({ password, userName, email }: IMutationFnArgs) =>
      registerUser(password, userName, email),
  });
};
