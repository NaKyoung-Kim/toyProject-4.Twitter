import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSEGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCanOp0KnFkpJjVCg4sNqFXPqKJLUv0DCs",
//   authDomain: "twitterclone-99156.firebaseapp.com",
//   projectId: "twitterclone-99156",
//   storageBucket: "twitterclone-99156.appspot.com",
//   messagingSenderId: "163869110090",
//   appId: "1:163869110090:web:8b7644de403762d8cd9bb3"
// };

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
