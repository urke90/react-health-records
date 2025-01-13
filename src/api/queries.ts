import { db } from '@/db';
import { errorMessageGenerator } from '@/utils/error-handling';
import { doc, FirestoreError, getDoc } from 'firebase/firestore';

// ----------------------------------------------------------------

export const fetchUser = async (userId: string) => {
  try {
    const userDocRef = doc(db, 'users', userId);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      throw new Error('User data not found!');
    }

    return userDocSnap.data();
  } catch (error) {
    console.log('Error fetching user document', error);
    if (error instanceof FirestoreError) {
      const errorMessage = errorMessageGenerator.getFirestoreErrorMessage(error.code);
      throw new Error(errorMessage);
    }
    throw new Error('Something went wrong fetching user data');
  }
};
