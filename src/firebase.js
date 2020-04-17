import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDpw4t8KuUggIAYgCkczUItUYQrQqSggqs",
    authDomain: "todolist-1bd85.firebaseapp.com",
    databaseURL: "https://todolist-1bd85.firebaseio.com",
    projectId: "todolist-1bd85",
    storageBucket: "todolist-1bd85.appspot.com",
    messagingSenderId: "656006507098",
    appId: "1:656006507098:web:322ad91c3f0099b3ccc663",
});

export { firebaseConfig as firebase };