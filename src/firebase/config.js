import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyD-cuE5uilej4_8x80lan0OYWFAQDeIYFk',
    authDomain: 'vue-firebase-app-73d12.firebaseapp.com',
    projectId: 'vue-firebase-app-73d12',
    storageBucket: 'vue-firebase-app-73d12.appspot.com',
    messagingSenderId: '830866461204',
    appId: '1:830866461204:web:d2a08f954f7785c3a04d01',
}

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestrore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestrore, projectAuth, timestamp }
