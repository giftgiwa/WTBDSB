import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://wtbdsb-7d385-default-rtdb.firebaseio.com/",
};

// initialize Firebase
const app = initializeApp(firebaseConfig) // initialize Firebase
const db = getDatabase() // database reference
const dbRef = ref(db)

// write user data to Firebase database; to be called each time the sign up button is pressed
export function addUserData(userId) {
  get(child(dbRef, `users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) { // username taken
      document.getElementById("signup-message").style.color = "#FF4646"
      document.getElementById("signup-message").textContent = "Username has already been taken!"
    } else { // username not yet taken - add it to the database
      document.getElementById("signup-message").textContent = "Success!"
      document.getElementById("signup-message").style.color = "#17AD00" // change text color to green for successful signup
      set(ref(db, 'users/' + userId), {
        username: userId,
        graphs: {
          space2D: {
            points: [],
            lines: [],
            curves: [],
          },
          space3D: {
            points: [],
            lines: [],
            curves: [],
          }
        }
      })
    }
  }).catch((error) => { // error catching
    console.error(error)
  })
}

// log user in via Firebase database; to be called each time the log in button is pressed
export async function getUserData(userId) {
  get(child(dbRef, `users/${userId}`)).then((snapshot) => {

    if (snapshot.exists()) { // username exists
      document.getElementById("login-message").style.color = "#17AD00" // change text color to green for successful login
      document.getElementById("login-message").textContent = "Success!"

      return
    } else { // username does not exist
      document.getElementById("login-message").textContent = "Username not found!"
      return
    }
  }).catch((error) => { // error catching
    console.error(error) // ignore null textContent error
  })
}
