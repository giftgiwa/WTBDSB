import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router'

import perspective_grid from '../../assets/images/perspective_grid.jpg'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import TitleBar from './COMPONENTS/title_bar.js'

import './App.css'
import './CSS/Home.css'
import './CSS/Login.css'
import './CSS/Signup.css'


// grid background with overlaying white gradient
function Background() {
  return (
    <div id = "background">
      <img className = "prevent-select prevent-drag absolute" id = "perspective-grid" draggable="false" src={perspective_grid}></img>
    </div>
  )
}

// welcome page (with login and signup buttons)
function Welcome() {
  const navigate = useNavigate()
  function handleLoginClick() {navigate("/login")} // to login
  function handleSignupClick() {navigate("/signup")} // to signup

  return (
    <div id = "welcome">
      <h1 className = "prevent-select title">WTBDSB</h1>
      <p id = "subtitle"><i><b>w</b>ants <b>t</b>o <b>b</b>e <b>d</b>esmos <b>s</b>o <b>b</b>ad</i></p>

      <button className = "btn prevent-drag" id = "login" onClick={handleLoginClick}>log in</button>
      <button className = "btn prevent-drag" id = "signup" onClick={handleSignupClick}>sign up</button>
      <button className = "btn prevent-drag" id = "guest">continue as guest</button>
    </div>
  )
}

// login page
function Login() {
  const navigate = useNavigate()
  function handleClickBack() {navigate("/")} // back to home
  function handleLoginClick() { // next page...
    navigate("/graphs")
  }

  function getUsername() {
    console.log(document.getElementById("username").value)
  }

  return (
    <div  id = "LOGIN">
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

// signup page
function Signup() {

  const navigate = useNavigate();
  function handleClick() { // back to home
    navigate("/");
  }

  function getUsername() {
    console.log(document.getElementById("username").value + " " + document.getElementById("username").value)
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
      <input className = "inputs horizontal-center" type="text" id="username" name="username"></input>

      {/* <p>password</p>
      <input className = "inputs horizontal-center" type="text" id="username" name="username"></input>

      <p>confirm password</p>
      <input className = "inputs horizontal-center" type="text" id="username" name="username"></input> */}

      <button className = "btn prevent-drag" id = "signup-button" onClick = {getUsername}>sign up</button>


      </div>
    </div>
  )
}

// full routing for the above pages.
export default function App() {
  return (
    <>
      <TitleBar />
      <Background />
      <Router>
        <Routes>

          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </Router>
    </>
  )
}
