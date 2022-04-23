import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQcJ27YGrBbFxk0j-miID_rKRSMoitpzo",
  authDomain: "buffalo-snow-plow.firebaseapp.com",
  projectId: "buffalo-snow-plow",
  storageBucket: "buffalo-snow-plow.appspot.com",
  messagingSenderId: "117181519111",
  appId: "1:117181519111:web:0cf7c508ffb46d939121a2"
};

// src/firebase.js
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }