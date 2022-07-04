// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';
import { getFirestore } from 'firebase/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7BGrGY74CDLLDfTBakn8s-5BpXVKRkpA",
    authDomain: "playdate-9bf9a.firebaseapp.com",
    projectId: "playdate-9bf9a",
    storageBucket: "playdate-9bf9a.appspot.com",
    messagingSenderId: "211081650181",
    appId: "1:211081650181:web:4ffb86866e49b88122bc6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Detect auth state
onAuthStateChanged(auth, user => {
    if (user !== null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
});



