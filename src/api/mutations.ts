import { auth, db } from '@/db';
import { errorMessageGenerator } from '@/utils/error-handling';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, FirestoreError, serverTimestamp, setDoc } from 'firebase/firestore';

// ----------------------------------------------------------------

export const registerUser = async (password: string, userName: string, email: string) => {
  try {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, 'users', response.user.uid), {
      id: response.user.uid,
      userName,
      email,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.log('Error in registerUser function', error);
    if (error instanceof FirebaseError) {
      if (error instanceof FirestoreError) {
        const errorMessage = errorMessageGenerator.getFirestoreErrorMessage(error.code);
        throw new Error(errorMessage);
      } else {
        const errorMessage = errorMessageGenerator.getAuthErrorMessage(error.code);
        throw new Error(errorMessage);
      }
    }
    throw new Error('An unexpected error occurred');
  }
};
