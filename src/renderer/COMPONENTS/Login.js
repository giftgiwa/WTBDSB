import { useNavigate } from 'react-router'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import '../css/Login.css'
import '../App.css'
import { dbRef, currentUser } from '../../backend/database.js'
import { child, get } from "firebase/database"


// login page
export default function Login() {

  const navigate = useNavigate()
  function handleClickBack() {navigate("/")} // back to home

  async function handleLogin() {
    let username = document.getElementById("username").value
    if (username.length == 0) {
      document.getElementById("login-message").style.color = "F54242"
      document.getElementById("login-message").textContent = "Error: please type a username."
    } else {

      await get(child(dbRef, `users/${username}`)).then((snapshot) => {
        if (snapshot.exists()) { // username exists
          document.getElementById("login-message").style.color = "#17AD00" // change text color to green for successful login
          document.getElementById("login-message").textContent = "Success!"

        } else { // username does not exist
          document.getElementById("login-message").textContent = "Username not found!"
        }
      }).catch((error) => { // error catching
        console.error(error) // ignore null textContent error
      })

      if (document.getElementById("login-message").textContent === "Success!") {
        // disable the button before moving to the next page
        document.getElementById("login-button").disabled = true

        currentUser[0] = username // set currentUser variable - data will be written to here upon login

        setTimeout(() => {
          navigate("/graphs")
        }, 200)
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
