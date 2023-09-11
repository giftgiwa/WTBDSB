import { useNavigate } from 'react-router'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import '../CSS/Login.css'
import '../App.css'

import { getUserData } from '../../backend/database.js'

// document.getElementById("login-button").disabled = true;

// login page
export default function Login() {

  const navigate = useNavigate()
  function handleClickBack() {navigate("/")} // back to home

  async function handleLogin() { // next page...
    let username = document.getElementById("username").value
    if (username.length == 0) {
      document.getElementById("login-message").textContent = "Error: please type a username."
    } else {
      await getUserData(username.toLowerCase())

      if (document.getElementById("login-message").textContent === "") {
        document.getElementById("login-message").style.color = "#17AD00" // change text color to green for successful login
        document.getElementById("login-message").textContent = "Success!"

        // error handling: disable the button before moving to the next page.
        // document.getElementById("login-button").disabled = true;

        navigate("/graphs")
      }
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
