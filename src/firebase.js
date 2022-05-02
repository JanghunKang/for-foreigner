import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyB-6buXqPCQuSVXe9wkzKGRonMIO_KoTAs",
    authDomain: "for-foreigner.firebaseapp.com",
    projectId: "for-foreigner",
    storageBucket: "for-foreigner.appspot.com",
    messagingSenderId: "715113266469",
    appId: "1:715113266469:web:440f87a4a664bab385aecc",
    measurementId: "G-LH1SJF7V9H"
  };

export default firebase.initializeApp(firebaseConfig)