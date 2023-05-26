import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCpw1_sF4sQ44--Kh_uOEKYMKDAmvYL52U',
  authDomain: 'veliavos-d7f7f.firebaseapp.com',
  projectId: 'veliavos-d7f7f',
  storageBucket: 'veliavos-d7f7f.appspot.com',
  messagingSenderId: '1074807387307',
  appId: '1:1074807387307:web:e04711206a5e1ec6c973ee',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

