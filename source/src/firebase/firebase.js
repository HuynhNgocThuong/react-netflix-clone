import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: `AIzaSyBnJK0vjPHQGdPcN26Be9tbpTEPOczBFxk`,
  authDomain: `netflix-clone-37a0d.firebaseapp.com`,
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: `https://netflix-clone-37a0d-default-rtdb.firebaseio.com`,
  storageBucket: `netflix-clone-37a0d.appspot.com`,
});
const firebaseDatabase = app.database();
const firebaseAuth = app.auth();
export { firebaseDatabase, firebaseAuth };
