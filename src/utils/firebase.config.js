// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration
const app = firebase.initializeApp({
	apiKey: 'AIzaSyAD4tuNE9eIkSl1Ko6PM_7G4Bep1i5VOd4',
	authDomain: 'twitter-clone-react-843be.firebaseapp.com',
	projectId: 'twitter-clone-react-843be',
	storageBucket: 'twitter-clone-react-843be.appspot.com',
	messagingSenderId: '635255540737',
	appId: '1:635255540737:web:8b76d2a698f9b989760400',
});

// Initialize Firebase
export const auth = app.auth();
// Dans la database firebase modifier la ligne (allow read, write: if false;) en (allow read, write: if true;)
export const db = getFirestore();
export default app;
