import { fetchUser } from '@/api/queries';
import { useQuery } from '@tanstack/react-query';

import { auth } from '@/db';
import type { IUserProfileSchemaDTO } from '@/lib/validation';

// ----------------------------------------------------------------

export const useFetchUser = () => {
  const userId = auth.currentUser!.uid;

  return useQuery<Partial<IUserProfileSchemaDTO>>({
    queryKey: ['user', userId],
    queryFn: () => fetchUser(userId),
  });
};
