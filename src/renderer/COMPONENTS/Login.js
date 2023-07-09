import { useNavigate } from 'react-router'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import '../CSS/Login.css'
import '../App.css'


// login page
export default function Login() {
  const navigate = useNavigate()
  function handleClickBack() {navigate("/")} // back to home
  function handleLoginClick() { // next page...
    navigate("/graphs")
  }

  function getUsername() {
    console.log(document.getElementById("username").value)
  }

  return (
    <div id = "LOGIN">
      <button className = "small-btn prevent-drag" id = "back" onClick={handleClickBack}>
        <ArrowBackIosNewIcon id = "arrow-back"></ArrowBackIosNewIcon>
      </button>

      <div className = "prevent-drag center" id = "login-form">
        <h2 className = "prevent-select">log in</h2>

        <p>username</p>
        <input className = "inputs horizontal-center" type="text" id="username" name="username"></input>

        <button className = "btn prevent-drag" id = "login-button" onClick = {getUsername}>log in</button>
      </div>
    </div>
  )
}
