import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';


var config = {
  apiKey: "AIzaSyBzPcn6l8PTjBtVom3-ay3DjRsddQWmVfA",
  authDomain: "portfolio-49e0a.firebaseapp.com",
  databaseURL: "https://portfolio-49e0a.firebaseio.com",
  projectId: "portfolio-49e0a",
  storageBucket: "portfolio-49e0a.appspot.com",
  messagingSenderId: "731593340225"
  };

firebase.initializeApp(config);
firebase.firestore();
var storage = firebase.storage();

//firebase.firestore().settings({timestampsInSnapshots:true});

export {firebase,storage};