import { useNavigate } from 'react-router'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import '../CSS/Login.css'
import '../App.css'

import { getUserData } from '../../backend/database.js'

// document.getElementById("login-button").disabled = true;

// login page
export default function Login() {
  // setTimeout(() => {
  //   console.log(document.getElementById("login-button"))
  // }, 10)

  const navigate = useNavigate()

  function handleClickBack() {navigate("/")} // back to home
  function handleLogin() { // next page...
    let username = document.getElementById("username").value
    if (username.length == 0) {
      document.getElementById("login-message").textContent = "Error: please type a username."
    } else {
      document.getElementById("login-message").textContent = ""
      getUserData(username.toLowerCase(), username)

      setTimeout(() => {
        if (document.getElementById("login-message").textContent === "") {
          document.getElementById("login-message").style.color = "#17AD00" // change text color to green for successful login
          document.getElementById("login-message").textContent = "Success!"
          setTimeout(() => {
            // error handling: disable the button before moving to the next page.
            document.getElementById("login-button").disabled = true;
            setTimeout(() => {
              navigate("/graphs") // delay movement to graphs route to enable success text to show
            }, 450)
          }, 400)
        }
      }, 500)
    }
  }

  return (
    <div id = "LOGIN">
      <button className = "small-btn prevent-drag" id = "back" onClick={handleClickBack}>
        <ArrowBackIosNewIcon id = "arrow-back"></ArrowBackIosNewIcon>
      </button>

      <div className = "prevent-drag center" id = "login-form">
        <h2 className = "prevent-select prevent-drag">log in</h2>

        <p className = "prevent-select prevent-drag">username</p>
        <input className = "inputs horizontal-center" type="text" id="username" name="username"></input>

        <button className = "btn prevent-drag" id = "login-button" onClick = {handleLogin}>log in</button>
      </div>

      <p className = "error-message" id = "login-message"></p>
    </div>
  )
}
