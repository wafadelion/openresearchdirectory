// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAPdnGKtktw19vsdVfQ7n1QwXzdo2tzdeU",
    authDomain: "openresearchdirectory-301b9.firebaseapp.com",
    projectId: "openresearchdirectory-301b9",
    storageBucket: "openresearchdirectory-301b9.firebasestorage.app",
    messagingSenderId: "531201364768",
    appId: "1:531201364768:web:f8121f8a6b8e370bf7bd45",
    measurementId: "G-XTZKW2SLC6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
