import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDn7feONgHk8dxX4CqEavWHBfcEMm_wgEg",
  authDomain: "pedro-aa115.firebaseapp.com",
  projectId: "pedro-aa115",
  storageBucket: "pedro-aa115.appspot.com",
  messagingSenderId: "660114236714",
  appId: "1:660114236714:web:6bccd8caa51ab93156ea53"
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