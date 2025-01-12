import { loginUser } from '@/api/mutations';
import { useMutation } from '@tanstack/react-query';

// ----------------------------------------------------------------

interface ILoginCredentials {
  email: string;
  password: string;
}

export const useLoginUser = () => {
  return useMutation({
    mutationFn: ({ email, password }: ILoginCredentials) => loginUser(email, password),
  });
};
