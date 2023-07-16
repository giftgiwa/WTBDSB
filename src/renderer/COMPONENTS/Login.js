import { useNavigate } from 'react-router'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import '../CSS/Login.css'
import '../App.css'

import { getUserData } from '../../backend/database.js'

// document.getElementById('button').disabled = true;

// login page
export default function Login() {
  const navigate = useNavigate()
  function handleClickBack() {navigate("/")} // back to home
  function handleLogin() { // next page...


    navigate("/graphs")
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

      <p className = "error-message" id = "login-error"></p>
    </div>
  )
}
