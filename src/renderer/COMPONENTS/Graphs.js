import { useNavigate } from 'react-router'
import { useRef, useEffect } from 'react'
// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import '../App.css'
import '../CSS/Graphs.css'


let Canvas = props => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')

    // let cameraOffset = { x: window.innerWidth/2, y: window.innerHeight/2 }
    // let cameraZoom = 1
    // let MAX_ZOOM = 5
    // let MIN_ZOOM = 0.1
    // let SCROLL_SENSITIVITY = 0.0005

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    function drawText(text, x, y, size, font) {
      ctx.font = `${size}px ${font}`
      ctx.fillText(text, x, y)
    }

    // color the canvas gray
    ctx.fillStyle = '#2f2f2f'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    // add sample text to the canvas (just as a test)
    ctx.fillStyle = "#fff"
    drawText("AAAAA", 400, 300, 20, "courier")
  })

  return <canvas ref={canvasRef} {...props}/>
}


export default function Graphs() {

  const navigate = useNavigate();
  function handleExit() { // back to home (log out)
    navigate("/")
  }

  return (
    <>
      {/* back/logout button */}
      <button className = "small-btn prevent-drag" id = "return" onClick={handleExit}>
        <ExitToAppIcon id = "go-home"></ExitToAppIcon>
      </button>

      <Canvas id = "canvas"></Canvas> {/* defined above */}
      {/*
      <div id = "panzoom-element"></div>
      */}


    </>
  )
}
