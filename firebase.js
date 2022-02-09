import * as firebase from "./firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBTgwQPSvvParTfZkxhR812GTUDyPohxRk",
  authDomain: "mywhatsapp34170.firebaseapp.com",
  projectId: "mywhatsapp34170",
  storageBucket: "mywhatsapp34170.appspot.com",
  messagingSenderId: "829405233638",
  appId: "1:829405233638:web:2fcd3030340ccbb9f31627",
};

const app = !firebase.apps.lenght
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
