import { useNavigate } from 'react-router'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import '../App.css'
import '../css/Signup.css'
import { child, get, set, ref } from "firebase/database"
import { db, dbRef } from '../../backend/database.js'

// signup page
export default function Signup() {

  const navigate = useNavigate();
  function handleClickBack() { // back to home
    navigate("/")
  }

  async function handleUsername() {
    // usernames don't match
    if (document.getElementById("username").value != document.getElementById("confirm-username").value) {
      document.getElementById("signup-message").textContent = "Usernames don't match!"
    }
    else {
      // empty username entry
      if (document.getElementById("username").value.length == 0) {
        document.getElementById("signup-message").textContent = "Error: please type a username."
      }

      else {
        // usernames don't match
        if (document.getElementById("username").value != document.getElementById("confirm-username").value) {
          document.getElementById("signup-message").textContent = "Usernames don't match!"
        }
        document.getElementById("signup-message").textContent = ""
        let username = document.getElementById("username").value

        await get(child(dbRef, `users/${username}`)).then((snapshot) => {
          if (snapshot.exists()) { // username taken
            document.getElementById("signup-message").style.color = "#FF4646"
            document.getElementById("signup-message").textContent = "Username has already been taken!"
          } else { // username not yet taken - add it to the database
            document.getElementById("signup-message").textContent = "Success!"
            document.getElementById("signup-message").style.color = "#17AD00" // change text color to green for successful signup
            set(ref(db, 'users/' + username), {
              username: username,
              graphs: {
                space2D: {
                  points: [1, 2, 3],
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

        if (document.getElementById("signup-message").textContent === "Success!") {
          document.getElementById("signup-button").disabled = true
          console.log("navigating to home")
          setTimeout(() => {
            navigate("/") // move back home on successful signup
          }, 200)
        }
      }
    }
  }

  return (
    <div id = "SIGNUP">
      <button className = "small-btn prevent-drag" id = "back" onClick={handleClickBack}>
        <ArrowBackIosNewIcon id = "arrow-back"></ArrowBackIosNewIcon>
      </button>

      <div className = "prevent-drag center" id = "signup-form">
        <h2 className = "prevent-select">sign up</h2>

        <p className = "prevent-select prevent-drag">username</p>
        <input className = "inputs horizontal-center" type="text" id="username" name="username"></input>

        <p className = "prevent-select prevent-drag">confirm username</p>
        <input className = "inputs horizontal-center" type="text" id="confirm-username" name="username"></input>

        <button className = "btn prevent-drag" id = "signup-button" onClick = {handleUsername}>sign up</button>


      </div>
      <p className = "error-message" id = "signup-message"></p>
    </div>
  )
}
