import { auth, db } from '@/db';
import { EQueryKeys } from '@/lib/constants';
import { IUserProfileSchema } from '@/lib/validation';
import { errorMessageGenerator } from '@/utils/error-handling';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { doc, FirestoreError, serverTimestamp, updateDoc } from 'firebase/firestore';

// ----------------------------------------------------------------

interface IMutationFnArgs {
  data: IUserProfileSchema;
}

export const useUpdateUser = () => {
  const userId = auth.currentUser!.uid;
  const queryClent = useQueryClient();

  return useMutation({
    mutationFn: async ({ data }: IMutationFnArgs) => {
      try {
        const userDocRef = doc(db, 'users', userId);

        await updateDoc(userDocRef, {
          ...data,
          updatedAt: serverTimestamp(),
        });
      } catch (error) {
        console.log('Error updating User profile info', error);
        if (error instanceof FirestoreError) {
          const errorMessage = errorMessageGenerator.getFirestoreErrorMessage(error.code);
          throw new Error(errorMessage);
        }
      }
    },
    onSuccess() {
      queryClent.invalidateQueries({
        queryKey: [EQueryKeys.USER, userId],
      });
    },
  });
};
