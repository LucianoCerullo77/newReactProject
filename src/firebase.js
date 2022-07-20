import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCLmdGblGt3NMFTrKph-xdCnY0AZ_gnIus",
    authDomain: "firechat01-94cbf.firebaseapp.com",
    projectId: "firechat01-94cbf",
    storageBucket: "firechat01-94cbf.appspot.com",
    messagingSenderId: "823688239427",
    appId: "1:823688239427:web:9de353ba7b6b88d01bb7f6",
    measurementId: "G-WZVJTDSKGL"
})

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth}