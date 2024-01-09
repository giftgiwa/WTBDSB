import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, child, get } from "firebase/database";

const firebaseConfig = {
  databaseURL: "https://wtbdsb-7d385-default-rtdb.firebaseio.com/",
};


export const app = initializeApp(firebaseConfig) // initialize Firebase
export const db = getDatabase() // database reference
export const dbRef = ref(db)
