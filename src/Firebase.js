// import firebase from 'firebase/app';
// import 'firebase/auth';
// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/messaging';
import 'firebase/compat/firestore';

 const app = firebase.initializeApp({
    apiKey: 'AIzaSyDAM2ZSKpzYfw-dTg_EqBIar2g6NLMBv30',
    authDomain: 'auth-devlopment-f20d8.firebaseapp.com',
    projectId: 'auth-devlopment-f20d8',
    storageBucket: 'auth-devlopment-f20d8.appspot.com',
    messagingSenderId: '600680309039',
    appId: '1:600680309039:web:e14ee89bb37978114281da',
});

export const auth = app.auth();
export default app;
