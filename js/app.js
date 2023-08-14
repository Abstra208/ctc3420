import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDZOojkQJf0PIXfYgMf6SdyurI22vEjnnk",
    authDomain: "ctc3420.firebaseapp.com",
    projectId: "ctc3420",
    storageBucket: "ctc3420.appspot.com",
    messagingSenderId: "298220775488",
    appId: "1:298220775488:web:b24600577123d5946a97a5",
    measurementId: "G-27E2ZLHJW0"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const telechargerBtn = document.getElementById("telecharger");
telechargerBtn.addEventListener("click", () => {
    const storageRef = ref(storage, '/');
    const file = document.getElementById("monFichier").files[0];

    if (file) {
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        }).catch((error) => {
            console.error("Erreur lors du téléchargement :", error);
        });
    } else {
        console.log("Aucun fichier sélectionné.");
    }
});
