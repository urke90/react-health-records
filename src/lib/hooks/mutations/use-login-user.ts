import { loginUser } from '@/api/mutations';
import { useMutation } from '@tanstack/react-query';

// ----------------------------------------------------------------

interface IMutationFnArgs {
  email: string;
  password: string;
}

export const useLoginUser = () => {
  return useMutation({
    mutationFn: ({ email, password }: IMutationFnArgs) => loginUser(email, password),
  });
};
