import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCvaN0_iUrGlwsLq7cdfUEp1-ULtyjMEcU",
  authDomain: "green-raise-agro.firebaseapp.com",
  projectId: "green-raise-agro",
  storageBucket: "green-raise-agro.firebasestorage.app",
  messagingSenderId: "808162429235",
  appId: "1:808162429235:web:0eaac96646bc5e494c9646",
  measurementId: "G-CMR5FXCRE2"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app; 