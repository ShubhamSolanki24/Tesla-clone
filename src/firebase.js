import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyBt8H7OIPQeUpjMUvZAkCBE07eE27bYHsI",
	authDomain: "tesla-clone-4e28f.firebaseapp.com",
	projectId: "tesla-clone-4e28f",
	storageBucket: "tesla-clone-4e28f.appspot.com",
	messagingSenderId: "932604267830",
	appId: "1:932604267830:web:4c882d06a93294bd283797"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()

export { auth }
