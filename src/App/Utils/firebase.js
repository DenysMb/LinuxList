import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbS_Y4rOInP91uWf26ZJ-S2_97fsF0bzE",
  authDomain: "linuxlist-ecb48.firebaseapp.com",
  databaseURL: "https://linuxlist-ecb48.firebaseio.com",
  projectId: "linuxlist-ecb48",
  storageBucket: "linuxlist-ecb48.appspot.com",
  messagingSenderId: "860544638379",
  appId: "1:860544638379:web:a65552561882e5bccc06ee",
};

firebase.initializeApp(firebaseConfig);

export const firebaseFirestore = firebase.firestore();

export default firebase;
