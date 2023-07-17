import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get, onValue } from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://wtbdsb-7d385-default-rtdb.firebaseio.com/",
};

// initialize Firebase
const app = initializeApp(firebaseConfig) // initialize Firebase
const db = getDatabase() // database reference
const dbRef = ref(db)

// write user data to Firebase database; to be called each time the sign up button is pressed
export function addUserData(userId, name) {

  get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) { // username taken
      document.getElementById("signup-error").textContent = "Username has already been taken!"
    } else { // username not yet taken - add it to the database
      document.getElementById("signup-error").textContent = ""
      set(ref(db, 'users/' + userId), {
        username: name,
      })
    }
  }).catch((error) => { // error catching
    console.error(error)
  })

}

// log user in via Firebase database; to be called each time the log in button is pressed
export function getUserData(userId, name) {
  let result = true
  get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) { // username taken
      document.getElementById("login-error").textContent = ""
      console.log("login successful!")
    } else { // username not yet taken - add it to the database
      document.getElementById("login-error").textContent = "Username not found!"
      result = false
    }
  }).catch((error) => { // error catching
    console.error(error)
  })
  return result

}
