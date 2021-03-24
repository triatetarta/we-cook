import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAKq4lwcst8PIKfMNg7RaVkqdUlLJnwJeQ',
  authDomain: 'we-cook-b6816.firebaseapp.com',
  projectId: 'we-cook-b6816',
  storageBucket: 'we-cook-b6816.appspot.com',
  messagingSenderId: '708914609430',
  appId: '1:708914609430:web:97c1c0818aeb2551efe437',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { auth, db, firebaseApp };
