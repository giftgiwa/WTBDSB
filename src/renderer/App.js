import { MemoryRouter as Router, Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router'

import perspective_grid from '../../assets/images/perspective_grid.jpg'
import TitleBar from './COMPONENTS/title_bar.js'
import Login from './COMPONENTS/Login.js'
import Signup from './COMPONENTS/Signup.js'
import Graphs from './COMPONENTS/Graphs.js'

import './CSS/Home.css'
import './App.css'


// switch "exit" button in accordance with whether the user is logged in or not.
let loggedIn = false

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

  // writing it like this was the only way i could get it working...
  const navigate = useNavigate()
  function handleLoginClick() {navigate("/login")} // to login
  function handleSignupClick() {navigate("/signup")} // to signup
  function handleGuestClick() {navigate("/graphs")} // to graphs page

  return (
    <div id = "welcome">
      <h1 className = "prevent-select title">WTBDSB</h1>
      <p id = "subtitle"><i><b>w</b>ants <b>t</b>o <b>b</b>e <b>d</b>esmos <b>s</b>o <b>b</b>ad</i></p>

      <button className = "btn prevent-drag" id = "login" onClick={handleLoginClick}>log in</button>
      <button className = "btn prevent-drag" id = "signup" onClick={handleSignupClick}>sign up</button>
      <button className = "btn prevent-drag" id = "guest" onClick={handleGuestClick}>continue as guest</button>
    </div>
  )
}

// full routing for the above pages.
export default function App() {
  return (
    <>
      <TitleBar />
      {/* <Background /> */}
      <Router>
        <Routes>

          <Route path="/" element={<>
            <Background />
            <Welcome />
          </>
          } />

          <Route path="/login" element={<>
            <Background />
            <Login />
          </>} />

          <Route path="/signup" element={<>
            <Background />
            <Signup />
          </>} />
          
          <Route path="/graphs" element={<Graphs />} />

        </Routes>
      </Router>
    </>
  )
}
