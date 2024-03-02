// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBgmrrjrMmuGhci_6drgD6HyOKqwUFlbEY',
	authDomain: 'house-marketplace-app-f5c2b.firebaseapp.com',
	projectId: 'house-marketplace-app-f5c2b',
	storageBucket: 'house-marketplace-app-f5c2b.appspot.com',
	messagingSenderId: '976081375450',
	appId: '1:976081375450:web:83dfa130fc504ccd4895e3',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
