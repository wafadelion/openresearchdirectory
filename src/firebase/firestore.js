// src/firebase/firestore.js
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './config';

// Get all researchers - update collection name to match Firebase
export const getResearchers = async () => {
  const snapshot = await getDocs(collection(db, 'Researchers')); // Capital R
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

// Update other functions too
export const addResearcher = async (researcher) => {
  return await addDoc(collection(db, 'Researchers'), researcher);
};

export const updateResearcher = async (id, updates) => {
  const researcherRef = doc(db, 'Researchers', id);
  await updateDoc(researcherRef, updates);
};

export const deleteResearcher = async (id) => {
  const researcherRef = doc(db, 'Researchers', id);
  await deleteDoc(researcherRef);
};