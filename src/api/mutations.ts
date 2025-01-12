import { auth, db } from '@/db';
import { errorMessageGenerator } from '@/utils/error-handling';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
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

export const loginUser = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    // ? Da li je potrebno proveravati sve errore ili samo ovako neke kao email? Da li onda praviti neku klasu gde cu imati sve error.code i njihove specificne greske ali formatirane u  userfriendly formatu??? (ovo je vise primer, da li moram da proveravam pojedinacno ili mogu da setujem u error ceo error.message i samo da renderujem?)
    if (error instanceof FirebaseError) {
      const errorMessage = errorMessageGenerator.getAuthErrorMessage(error.code);

      throw new Error(errorMessage);
    }
  }
};
