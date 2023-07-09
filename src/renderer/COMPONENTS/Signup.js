import { useNavigate } from 'react-router'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import '../App.css'
import '../CSS/Signup.css'



// signup page
export default function Signup() {

  const navigate = useNavigate();
  function handleClick() { // back to home
    navigate("/")
  }

  function handleUsername() {
    // console.log(document.getElementById("username").value + " " + document.getElementById("confirm-username").value)

    if (document.getElementById("username").value !== document.getElementById("confirm-username").value) {
      console.log("Error: usernames don't match!")
      document.getElementById("error-message").textContent = "Error: usernames don't match!"
    }
    let username = document.getElementById("username").value
    writeUserData(username, username)
  }

  return (
    <div id = "SIGNUP">
      <button className = "small-btn prevent-drag" id = "back" onClick={handleClick}>
        <ArrowBackIosNewIcon id = "arrow-back"></ArrowBackIosNewIcon>
      </button>

      <div className = "prevent-drag center" id = "signup-form">
        <h2 className = "prevent-select">sign up</h2>

        <p>username</p>
        <input className = "inputs horizontal-center" type="text" id="username" name="username"></input>

        <p>confirm username</p>
        <input className = "inputs horizontal-center" type="text" id="confirm-username" name="username"></input>

        {/* <p>password</p>
        <input className = "inputs horizontal-center" type="text" id="username" name="username"></input>

        <p>confirm password</p>
        <input className = "inputs horizontal-center" type="text" id="username" name="username"></input> */}

        <button className = "btn prevent-drag" id = "signup-button" onClick = {handleUsername}>sign up</button>


      </div>
      {/* <p id = "error-message"></p> */}
    </div>
  )
}
