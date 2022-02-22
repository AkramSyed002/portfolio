// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	// apiKey: "AIzaSyDQUeEIHQ_7Kouw1B6nGfH1PYyH8UqNMrg",
	// authDomain: "genralproject-aedaf.firebaseapp.com",
	// databaseURL: "https://genralproject-aedaf-default-rtdb.firebaseio.com",
	// projectId: "genralproject-aedaf",
	// storageBucket: "genralproject-aedaf.appspot.com",
	// messagingSenderId: "1016767110002",
	// appId: "1:1016767110002:web:0b99916c560793d0e7dbeb"

	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATA_BASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;