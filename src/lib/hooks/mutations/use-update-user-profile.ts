import { updateUserProfile } from '@/api/mutations';
import { IUserProfileSchema } from '@/lib/validation';
import { useMutation } from '@tanstack/react-query';

// ----------------------------------------------------------------

interface IUserData {
  userId: string;
  data: IUserProfileSchema;
}

export const useUpdateUserProfile = () => {
  return useMutation({
    mutationFn: ({ userId, data }: IUserData) => updateUserProfile(userId, data),
  });
};
