import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBrDi4AZXojhjtg5WEYehGDTV5sLK4LiV4",
  authDomain: "people-drink-4a53c.firebaseapp.com",
  projectId: "people-drink-4a53c",
  storageBucket: "people-drink-4a53c.appspot.com",
  messagingSenderId: "302997537820",
  appId: "1:302997537820:web:ef1e292a840c3bad848bd9",
  measurementId: "G-Q4GTXYR0BT"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
