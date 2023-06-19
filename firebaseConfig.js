import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBWVQb5K0NruNH1Wp-mbc7huEJJf208F6s",
    authDomain: "digital-island-fd436.firebaseapp.com",
    projectId: "digital-island-fd436",
    storageBucket: "digital-island-fd436.appspot.com",
    messagingSenderId: "246015590296",
    appId: "1:246015590296:web:6782d3694940d7baa375ed",
    measurementId: "G-VZDLWHNY5K"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
