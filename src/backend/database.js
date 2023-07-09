import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // URL of the Firebase realtime database
  databaseURL: "https://wtbdsb-7d385-default-rtdb.firebaseio.com/",
};

// initialize Firebase
const app = initializeApp(firebaseConfig);

// initialize Realtime Database and get a reference to the service
// const database = getDatabase(app);

// write user data to Firebase database - to be called each time the sign up button is pressed
export function addUserData(userId, name) {
  const db = getDatabase()
  set(ref(db, 'users/' + userId), {
    username: name,
  })
}

export function getUserData(userId, name) {
  const db = getDatabase()

}
