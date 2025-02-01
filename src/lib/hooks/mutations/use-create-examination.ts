import { auth, db } from '@/db';
import { EFirestoreCollections } from '@/lib/constants';
import type { IBaseMedicalExaminationSchema } from '@/lib/validation';
import { errorMessageGenerator } from '@/utils/error-handling';
import { useMutation } from '@tanstack/react-query';
import { addDoc, collection, FirestoreError, serverTimestamp } from 'firebase/firestore';

// ----------------------------------------------------------------

export const useCreateMedicalExamination = () => {
  const userId = auth.currentUser!.uid;

  return useMutation({
    mutationFn: async (data: IBaseMedicalExaminationSchema) => {
      try {
        const docRef = await addDoc(
          collection(
            db,
            EFirestoreCollections.USERS,
            userId,
            EFirestoreCollections.MEDICAL_EXAMINATIONS
          ),
          {
            ...data,
            followUpExamination: null,
            prescription: '',
            medicines: '',
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          }
        );

        console.log('docRef CREATE MEDICAL EXAMINATION', docRef);
      } catch (error) {
        console.log('Error creating new medical examination', error);
        if (error instanceof FirestoreError) {
          const errorMessage = errorMessageGenerator.getFirestoreErrorMessage(error.code);
          throw new Error(errorMessage);
        }
        throw new Error('An unexpected error occurred');
      }
    },
  });
};
