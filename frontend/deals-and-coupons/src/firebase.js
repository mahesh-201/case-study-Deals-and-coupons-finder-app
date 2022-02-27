import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRC23OYI_6AOB06dxhrHhh-dRbEsZiWi8",
  authDomain: "deals-and-coupons-fddcf.firebaseapp.com",
  projectId: "deals-and-coupons-fddcf",
  storageBucket: "deals-and-coupons-fddcf.appspot.com",
  messagingSenderId: "873265673766",
  appId: "1:873265673766:web:5c14ca05c3439fe44158e7",
  measurementId: "G-0KMZ7995QC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };