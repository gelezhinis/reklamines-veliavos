import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBtazTX1T2GBwQwIRKdB3msiQ5bonpjtPg',
  authDomain: 'reklamines-veliavos.firebaseapp.com',
  projectId: 'reklamines-veliavos',
  storageBucket: 'reklamines-veliavos.appspot.com',
  messagingSenderId: '378172650065',
  appId: '1:378172650065:web:9c89a5c5dfeb7d9c6cfe70',
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.RAECT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.RAECT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
console.log('ENV', process.env.RAECT_APP_FIREBASE_STORAGE_BUCKET);

