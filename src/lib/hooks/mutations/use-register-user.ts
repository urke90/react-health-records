import { registerUser } from '@/api/mutations';
import { useMutation } from '@tanstack/react-query';

// ----------------------------------------------------------------

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: ({
      password,
      userName,
      email,
    }: {
      password: string;
      userName: string;
      email: string;
    }) => registerUser(password, userName, email),
  });
};
