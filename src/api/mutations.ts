import { db } from '@/db';
import type { IUserProfileSchema } from '@/lib/validation';
import { errorMessageGenerator } from '@/utils/error-handling';
import { doc, FirestoreError, serverTimestamp, updateDoc } from 'firebase/firestore';

// ----------------------------------------------------------------

/********************************  AUTH  ********************************/

/********************************  AUTH  ********************************/

/********************************  USER  ********************************/

export const updateUser = async (userId: string, data: IUserProfileSchema) => {
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
};

/********************************  USER  ********************************/
