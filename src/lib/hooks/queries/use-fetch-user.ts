import { fetchUser } from '@/api/queries';
import { useQuery } from '@tanstack/react-query';

import type { IUserProfileSchemaDTO } from '@/lib/validation';

// ----------------------------------------------------------------

export const useFetchUser = (userId: string) => {
  return useQuery<Partial<IUserProfileSchemaDTO>>({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });
};
