import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js';
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-storage.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

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
const auth = getAuth(firebaseApp);
const listRef = ref(storage, '');
const imagesContainer = document.getElementById("imagesContainer");

function away(){
while (imagesContainer.firstChild) {
    imagesContainer.removeChild(imagesContainer.firstChild);
}
listAll(listRef)
    .then((res) => {
        res.items.forEach((itemRef) => {
            getDownloadURL(ref(storage, itemRef ))
                .then((url) => {
                    const imgElement = document.createElement("img");
                    imgElement.src = url;
                    imgElement.alt = itemRef.name;

                    imagesContainer.appendChild(imgElement);
                })
                .catch((error) => {
                    console.error("Erreur lors de l'obtention du lien :", error);
                });
        });
    }).catch((error) => {
        console.error("Erreur lors de la récupération de la liste :", error);
});
}
away()

const telechargerBtn = document.getElementById("telecharger");
telechargerBtn.addEventListener("click", () => {
    const file_name = document.getElementById("file_name_input").value;
    const storageRef = ref(storage, file_name);
    const file = document.getElementById("file").files[0];

    if (file) {
        if (file_name == "") {
            console.log("Aucun nom donné.")
        } else {
            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
                away();
            }).catch((error) => {
                console.error("Erreur lors du téléchargement :", error);
            });
        }
    } else {
        console.log("Aucun fichier sélectionné.");
    }
});

const googleAuthButton = document.getElementById("googleAuth");
googleAuthButton.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
});
