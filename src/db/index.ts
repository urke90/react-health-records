import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// ----------------------------------------------------------------

const firebaseConfig = {
  apiKey: import.meta.env.VITE_DB_API_KEY,
  authDomain: import.meta.env.VITE_DB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_DB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_DB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_DB_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_DB_APP_ID,
  measurementId: import.meta.env.VITE_DB_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// connectAuthEmulator(auth, 'http://127.0.0.1:9099');

// ? Export this variable for now, till i decide if i should work with firebase API or regular HTTP calls
export const db = getFirestore(app);
