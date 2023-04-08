import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCXpZlXVda4i6tSEMAoHHwApO_HLZ1D9Ko",
  authDomain: "to-do-416ea.firebaseapp.com",
  projectId: "to-do-416ea",
  storageBucket: "to-do-416ea.appspot.com",
  messagingSenderId: "878837940425",
  appId: "1:878837940425:web:99aac9b0801cb55d5ccd18",
  measurementId: "G-NEW963KB4M",
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export { firebase };
// let app;
// if (firebase.apps.length === 0) {
//   app = firebase.initializeApp(firebaseConfig);
// } else {
//   app = firebase.app()
// }

// const auth = firebase.auth()

// export { auth };