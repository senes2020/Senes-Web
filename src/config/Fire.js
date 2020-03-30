import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA1rxsUCrqGLuxEy3te6FHiShwdPhNJi5w",
    authDomain: "senes-web.firebaseapp.com",
    databaseURL: "https://senes-web.firebaseio.com",
    projectId: "senes-web",
    storageBucket: "senes-web.appspot.com",
    messagingSenderId: "121318735942",
    appId: "1:121318735942:web:c8586b4efe2f1e414c0a47",
    measurementId: "G-5C50E6JNYZ"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;