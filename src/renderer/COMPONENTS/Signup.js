import { useNavigate } from 'react-router'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import '../App.css'
import '../CSS/Signup.css'

import { addUserData } from '../../backend/database.js'

// signup page
export default function Signup() {

  const navigate = useNavigate();
  function handleClick() { // back to home
    navigate("/")
  }

  function handleUsername() {
    // usernames don't match
    if (document.getElementById("username").value != document.getElementById("confirm-username").value) {
      document.getElementById("signup-message").textContent = "Usernames don't match!"
    }

    // empty username entry
    if (document.getElementById("username").value.length == 0) {
      document.getElementById("signup-message").textContent = "Error: please type a username."
    } else {
      // usernames don't match
      if (document.getElementById("username").value != document.getElementById("confirm-username").value) {
        document.getElementById("signup-message").textContent = "Usernames don't match!"
      }
      document.getElementById("signup-message").textContent = ""
      let username = document.getElementById("username").value
      addUserData(username.toLowerCase(), username)

      setTimeout(() => {
        if (document.getElementById("signup-message").textContent === "Success!") {
          console.log("navigating to home")
          setTimeout(() => {
            navigate("/") // move back home on successful signup
          }, 400)
        }
      }, 50)
    }
  }

  return (
    <div id = "SIGNUP">
      <button className = "small-btn prevent-drag" id = "back" onClick={handleClick}>
        <ArrowBackIosNewIcon id = "arrow-back"></ArrowBackIosNewIcon>
      </button>

      <div className = "prevent-drag center" id = "signup-form">
        <h2 className = "prevent-select">sign up</h2>

        <p className = "prevent-select prevent-drag">username</p>
        <input className = "inputs horizontal-center" type="text" id="username" name="username"></input>

        <p className = "prevent-select prevent-drag">confirm username</p>
        <input className = "inputs horizontal-center" type="text" id="confirm-username" name="username"></input>

        {/* <p>password</p>
        <input className = "inputs horizontal-center" type="text" id="username" name="username"></input>

        <p>confirm password</p>
        <input className = "inputs horizontal-center" type="text" id="username" name="username"></input> */}

        <button className = "btn prevent-drag" id = "signup-button" onClick = {handleUsername}>sign up</button>


      </div>
      <p className = "error-message" id = "signup-message"></p>
    </div>
  )
}
