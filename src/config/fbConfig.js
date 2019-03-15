import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAdKWOgJ_UvGSb5VXT6QQ6PUBmCvvw1bIc",
    authDomain: "marioplan-bd883.firebaseapp.com",
    databaseURL: "https://marioplan-bd883.firebaseio.com",
    projectId: "marioplan-bd883",
    storageBucket: "marioplan-bd883.appspot.com",
    messagingSenderId: "35249501678"
};
firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;