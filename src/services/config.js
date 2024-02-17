// Import the functions you need from the SDKs you need
//Vamos a importar 2 funciones del modulo Firebase:
//InitializeApp:  me permite iniicar la conexión con Firebase.
//getFirestore: me permite obtener una instancia de Firestore.

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
//Aca se incluye la clave personal para acceder a la bd
const firebaseConfig = {
    apiKey: "AIzaSyBizG_DvpssO0LGgo3jKXqOy8ZV0v5tfqg",
    authDomain: "tienda-baab8.firebaseapp.com",
    projectId: "tienda-baab8",
    storageBucket: "tienda-baab8.appspot.com",
    messagingSenderId: "240631361818",
    appId: "1:240631361818:web:1da89e4d4a3e9dd1ad7ca3",
    measurementId: "G-4HTWXSNS7S"
};

// Initialize Firebase y se pasa la configuracion como argumento.
//Esto me retorna una instancia de Firebase.
const app = initializeApp(firebaseConfig);

//Ahora uso esa instancia para obtener el servicio de Firestore:
export const db = getFirestore(app);