import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyCYI7Lwo_yzByiL3NVqI-rO2EgMxvvOrf0",
  authDomain: "van-life-project-5f91e.firebaseapp.com",
  projectId: "van-life-project-5f91e",
  storageBucket: "van-life-project-5f91e.appspot.com",
  messagingSenderId: "754160541167",
  appId: "1:754160541167:web:26295bc52823bec546ea1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const vansCollectionRef = collection(db, "vans")
const usersCollectionRef = collection(db, "users")

export async function getVans() {
    const querySnapshot = await getDocs(vansCollectionRef)
    if (querySnapshot.empty){
        throw{
            message:"Failed to load vans!"
        }
    }
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function getVanDetails(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    if (!vanSnapshot.exists()){
        throw{
            message:"You're trying to access a van that doesn't exist"
        }
    }
    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", localStorage.getItem('userId')))
    const querySnapshot = await getDocs(q)
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr
}

export async function getHostVansDetails(id) {
    const docRef = doc(db, "vans", id)
    const vanSnapshot = await getDoc(docRef)
    if (!vanSnapshot.exists() || vanSnapshot.data().hostId !=localStorage.getItem('userId')){
        throw{
            message: 'You don\'t have access to this page',
        }
    }

    return {
        ...vanSnapshot.data(),
        id: vanSnapshot.id
    }
}

export async function loginUser(creds) {
    const q = query(usersCollectionRef, where("email", "==", creds.email), where("password","==",creds.password))
    const querySnapshot = await getDocs(q)
    const data = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    if (data.length !==0){
        localStorage.setItem('userId',data[0].id)
        return data[0]
    }
    else{
        throw {
            message: 'Invalid Credentials',
        }
    }
}