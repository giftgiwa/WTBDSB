import { useNavigate } from 'react-router'
import Panzoom from '@panzoom/panzoom'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import '../App.css'
import '../CSS/Graphs.css'


// And pass it to panzoom
// panzoom(element)

export default function Graphs() {
  // const Panzoom = require('@panzoom/panzoom')

  const navigate = useNavigate();
  function handleExit() { // back to home (log out)
    navigate("/")
  }

  const elem = document.getElementById("panzoom-element")
  setTimeout(() => {
    if (elem) console.log(elem)

     const panzoom = Panzoom(document.getElementById('panzoom-element'), {
      maxScale: 5
    })
    panzoom.pan(10, 10)
    panzoom.zoom(2, { animate: true })


    // button.addEventListener('click', panzoom.zoomIn)
    document.getElementById('panzoom-element').parentElement.addEventListener('wheel', panzoom.zoomWithWheel)

  }, 100)
  // const panzoom = Panzoom(document.getElementById('panzoom-element'), {
  //   maxScale: 5
  // })
  // panzoom.pan(10, 10)
  // panzoom.zoom(2, { animate: true })


  // button.addEventListener('click', panzoom.zoomIn)
  // document.getElementById('panzoom-element').parentElement.addEventListener('wheel', panzoom.zoomWithWheel)

  // function handleFullExit() { // back to main page

  // }

  return (
    <>
      {/* back/logout button */}
      <button className = "small-btn prevent-drag" id = "return" onClick={handleExit}>
        <ExitToAppIcon id = "go-home"></ExitToAppIcon>
      </button>

      <div id = "panzoom-element"></div>
      {/* <div id = "scene"></div> */}
    </>
  )
}
