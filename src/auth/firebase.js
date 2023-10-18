// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvpVxeKu7WXmAqN3ezsrWiVlhFp7NW9Gs",
  authDomain: "countries-react23k.firebaseapp.com",
  projectId: "countries-react23k",
  storageBucket: "countries-react23k.appspot.com",
  messagingSenderId: "561421813788",
  appId: "1:561421813788:web:cfdbac78916272516177d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

const loginWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    }
    catch (err) {
        alert(err.message)
    }
}

const registerWithEmailAndPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user
        await addDoc(collection(db, 'users'), {
            uid: user.uid,
            name,
            authProvider: 'local',
            email,
        })
    }
    catch (err) {
        alert(err.message)
    }
}

const logout = () => {
    signOut(auth)
}

export { auth, db, loginWithEmailAndPassword, logout, registerWithEmailAndPassword };
