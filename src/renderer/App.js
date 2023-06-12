/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable camelcase */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router'

import perspective_grid from '../../assets/images/perspective_grid.jpg'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import TitleBar from './COMPONENTS/title_bar.js'

import './App.css'
import './CSS/Home.css'
import './CSS/Login.css'
import './CSS/Signup.css'


// grid background with overlaying gradient
function Background() {
  return (
    <div id = "background">
      <img className = "prevent-select prevent-drag absolute" id = "perspective-grid" src={perspective_grid}></img>
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
  // function handleLoginClick() {navigate("/graphs")} // next page...


  return (
    <div  id = "LOGIN">
      <button className = "small-btn prevent-drag" id = "back" onClick={handleClickBack}>
        <ArrowBackIosNewIcon id = "arrow-back"></ArrowBackIosNewIcon>
      </button>

      <div className = "prevent-drag center" id = "login-form">
        <h2 className = "prevent-select">log in</h2>

        <p>username</p>
        <input className = "inputs horizontal-center" type="text" id="username" name="username"></input>

        <button className = "btn prevent-drag" id = "login-button">log in</button>


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
  return (
    <div id = "SIGNUP">
      <button className = "small-btn prevent-drag" id = "back" onClick={handleClick}>
        <ArrowBackIosNewIcon id = "arrow-back"></ArrowBackIosNewIcon>
      </button>

      <div className = "prevent-drag center" id = "signup-form">


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
