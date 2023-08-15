import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js';
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-storage.js";

const firebaseApp = initializeApp({
    apiKey: "AIzaSyDZOojkQJf0PIXfYgMf6SdyurI22vEjnnk",
    authDomain: "ctc3420.firebaseapp.com",
    projectId: "ctc3420",
    storageBucket: "ctc3420.appspot.com",
    messagingSenderId: "298220775488",
    appId: "1:298220775488:web:b24600577123d5946a97a5",
    measurementId: "G-27E2ZLHJW0"    
});
const storage = getStorage(firebaseApp);

listAll(listRef)
    .then((res) => {
        const imagesContainer = document.getElementById("imagesContainer"); // L'élément HTML où afficher les images

        res.items.forEach((itemRef) => {
            try {
                getDownloadURL(ref(storage, "images/" + itemRef ))
                    .then((url) => {
                        const imgElement = document.createElement("img");
                        imgElement.src = url;
                        imgElement.alt = item.name;

                        imagesContainer.appendChild(imgElement);
                    })
                    .catch((error) => {
                        console.error("Erreur lors de l'obtention du lien :", error);
                    });
            } catch (error) {
                console.error("Erreur lors de l'obtention du lien :", error);
            }
        });
    }).catch((error) => {
        console.error("Erreur lors de la récupération de la liste :", error);
});

const telechargerBtn = document.getElementById("telecharger");
telechargerBtn.addEventListener("click", () => {
    const file_name = document.getElementById("file_name_input").value;
    const storageRef = ref(storage, file_name);
    const file = document.getElementById("file").files[0];

    if (file) {
        if (file_name == "") {
            console.log("Aucun nom donne.")
        } else {
            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            }).catch((error) => {
                console.error("Erreur lors du téléchargement :", error);
            });
        }
    } else {
        console.log("Aucun fichier sélectionné.");
    }
});