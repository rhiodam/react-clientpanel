import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, combineReducers, compose} from 'redux'
import {reactReduxFirebase, firebaseReducer} from 'react-redux-firebase'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import { reduxFirestore, firestoreReducer } from 'redux-firestore' // <- needed if using firestore


// <script src="https://www.gstatic.com/firebasejs/5.9.3/firebase.js"></script>
// <script>
//     // Initialize Firebase
//     var config = {
//     apiKey: "AIzaSyAUmNUUChsEmK9oP7BsUJ9KCmE_kuYQuoQ",
//     authDomain: "react-client-panel-c1052.firebaseapp.com",
//     databaseURL: "https://react-client-panel-c1052.firebaseio.com",
//     projectId: "react-client-panel-c1052",
//     storageBucket: "react-client-panel-c1052.appspot.com",
//     messagingSenderId: "450302960127"
// };
//     firebase.initializeApp(config);
// </script>


const firebaseConfig = {
    apiKey: "AIzaSyAUmNUUChsEmK9oP7BsUJ9KCmE_kuYQuoQ",
    authDomain: "react-client-panel-c1052.firebaseapp.com",
    databaseURL: "https://react-client-panel-c1052.firebaseio.com",
    projectId: "react-client-panel-c1052",
    storageBucket: "react-client-panel-c1052.appspot.com",
    messagingSenderId: "450302960127"
}


// react-redux-firebase config
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

// Initialize firebase instance
firebase.initializeApp(firebaseConfig)

// Initialize other services on firebase instance
// const firestore = firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
)(createStore)

// Add firebase to reducers
const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer // <- needed if using firestore
})

// Create store with reducers and initial state
const initialState = {}

const store = createStoreWithFirebase(
    rootReducer,
    initialState,
    compose(
        reactReduxFirebase(firebase),
        window.__REDUX_DEVTOOLS_EXTENSION__
        &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

export default store;






