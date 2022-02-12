// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDQUeEIHQ_7Kouw1B6nGfH1PYyH8UqNMrg",
	authDomain: "genralproject-aedaf.firebaseapp.com",
	databaseURL: "https://genralproject-aedaf-default-rtdb.firebaseio.com",
	projectId: "genralproject-aedaf",
	storageBucket: "genralproject-aedaf.appspot.com",
	messagingSenderId: "1016767110002",
	appId: "1:1016767110002:web:0b99916c560793d0e7dbeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;