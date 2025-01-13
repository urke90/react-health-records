import { updateUser } from '@/api/mutations';
import { auth } from '@/db';
import { EQueryKeys } from '@/lib/constants';
import { IUserProfileSchema } from '@/lib/validation';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// ----------------------------------------------------------------

interface IMutationFnArgs {
  data: IUserProfileSchema;
}

export const useUpdateUser = () => {
  const userId = auth.currentUser!.uid;
  const queryClent = useQueryClient();

  return useMutation({
    mutationFn: ({ data }: IMutationFnArgs) => updateUser(userId, data),
    onSuccess() {
      queryClent.invalidateQueries({
        queryKey: [EQueryKeys.USER, userId],
      });
    },
  });
};
