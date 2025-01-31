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

// useEffect(() => {
//   const fetchData = async () => {
//     // const userCollectionRef = collection(db, 'users', );
//     const testColl = collection(db, 'users', 'iA3lzoHQ5jcAqy5CKlHEmWuXkKz1', 'test');
//     // console.log('user collection', userCollectionRef);
//     console.log('testCol', testColl);

//     const bla = await getDocs(testColl);
//     console.log('bla', bla);

//     const docs = doc(db, 'users', 'iA3lzoHQ5jcAqy5CKlHEmWuXkKz1', 'test', 'q8LndPAGUx77LBWSR9LP');

//     console.log('docs', docs);

//     const aaa = await getDoc(docs);

//     console.log('aaaaaaa', aaa.data());

//     // bla.forEach((bla) => {
//     //   console.log('BLA IS FROM user ID TEST collection', bla.data());
//     // });

//     // const userDocs = await getDocs(userCollectionRef);

//     // userDocs.forEach((doc) => {
//     //   console.log('user collection doc in for each', doc.data());
//     // });
//     // const testCollectionRef = collection(userCollectionRef, 'test', '');

//     // const testDoc = await getDocs(testCollectionRef);

//     // testDoc.forEach((doc) => {
//     //   console.log('THIS IS FETCHED TEST DOCUMENT', doc);
//     // });
//   };
//   fetchData();
// }, []);
