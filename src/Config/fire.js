import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAYS-TvDymJsSzxhjF-Ct-I67Uafki1lko",
    authDomain: "login-72046.firebaseapp.com",
    databaseURL: "https://login-72046.firebaseio.com",
    projectId: "login-72046",
    storageBucket: "login-72046.appspot.com",
    messagingSenderId: "185466385613",
    appId: "1:185466385613:web:9c857c6fa30f541cc56584",
    measurementId: "G-FPDW6SSS8M"
};
const fire = firebase.initializeApp(config);
export default fire;