import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import dotenv from 'dotenv';

dotenv.config();

const firebaseConfig = {
    apiKey: "AIzaSyApbwZOYA7sVIQ4X6SQDGFBHukx8IYHq5g",
    authDomain: "inventorymanagement-fc275.firebaseapp.com",
    projectId: "inventorymanagement-fc275",
    storageBucket: "inventorymanagement-fc275.appspot.com",
    messagingSenderId: "728954031055",
    appId: "1:728954031055:web:174382eb2390969139e0ba"
 };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };