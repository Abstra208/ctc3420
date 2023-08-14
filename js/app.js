const firebase = require('firebase/app');
require('firebase/storage');

const firebaseConfig = {
    apiKey: "AIzaSyDZOojkQJf0PIXfYgMf6SdyurI22vEjnnk",
    authDomain: "ctc3420.firebaseapp.com",
    projectId: "ctc3420",
    storageBucket: "ctc3420.appspot.com",
    messagingSenderId: "298220775488",
    appId: "1:298220775488:web:b24600577123d5946a97a5",
    measurementId: "G-27E2ZLHJW0"
};

firebase.initializeApp(firebaseConfig);

const telechargerBtn = document.getElementById("telecharger");
telechargerBtn.addEventListener("click", () => {
    const storageRef = firebase.storage().ref();
    const file = document.getElementById("monFichier").files[0];

    if (file) {
        const fileRef = storageRef.child("chemin/vers/mon/fichier");
        fileRef.put(file).then((snapshot) => {
            console.log("Fichier téléchargé avec succès !");
        }).catch((error) => {
            console.error("Erreur lors du téléchargement :", error);
        });
    } else {
        console.log("Aucun fichier sélectionné.");
    }
});
