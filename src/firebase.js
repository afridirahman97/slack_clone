import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBheDp9pPmSY-XOXM3F6MxqTGwy9rwuY2Q",
    authDomain: "slack-541ac.firebaseapp.com",
    databaseURL: "https://slack-541ac.firebaseio.com",
    projectId: "slack-541ac",
    storageBucket: "slack-541ac.appspot.com",
    messagingSenderId: "676873872414",
    appId: "1:676873872414:web:f4334955df60fd6c4d3a0f",
    measurementId: "G-0MB3V69E8S"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
 

  export { auth, provider };
  export default db;

  