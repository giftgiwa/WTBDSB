import { useNavigate } from 'react-router'
import { useRef, useEffect } from 'react'
// import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch"
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import '../App.css'
import '../css/Graphs.css'
import { currentUser } from '../../backend/database.js'
import { SVG } from '@svgdotjs/svg.js'


/*
let Canvas = props => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = document.getElementById("canvas")
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    function drawText(text, x, y, size, font) {
      ctx.font = `${size}px ${font}`
      ctx.fillText(text, x, y)
    }

    ctx.fillStyle = '#2f2f2f'
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    ctx.fillStyle = "#fff"
    drawText("canvas test text", 400, 300, 20, "courier")
  })
  return <canvas ref={canvasRef} {...props}/>
}
*/

/*
const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <>
      <button className = "controls-button" onClick={() => zoomIn()}>Zoom In</button>
      <button className = "controls-button" onClick={() => zoomOut()}>Zoom Out</button>
      <button className = "controls-button" onClick={() => resetTransform()}>Reset</button>
    </>
  );
};
*/

const GraphPaper = () => {

  // the div for the graphs takes a bit of time to render.


  return (
    <div id = "graph-paper">
      <svg height="210" width="500">
        <line x1="0" y1="0" x2="200" y2="200" id = "gridline"/>
      </svg>

    </div>
  )
}




export default function Graphs() {

  const navigate = useNavigate();
  function handleExit() { // back to home (log out)
    navigate("/")
  }

  setTimeout(() => {
    console.log(document.getElementById("GRAPHS"))



  }, 100)


  return (
    <div id="GRAPHS">
      {/* back/logout button */}
      <button className = "small-btn prevent-drag" id = "return" onClick={handleExit}>
        <ExitToAppIcon id = "go-home"></ExitToAppIcon>
      </button>

      <GraphPaper></GraphPaper>

      {/* <TransformWrapper className = "transform-box">
      <Controls />
        <TransformComponent>
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="test"
            width="100%"
          />
        </TransformComponent>
      </TransformWrapper> */}

      {/* <div className="svgtest">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        fill="currentColor"
        class="bi bi-google"
        viewBox="0 0 16 16"
      >
        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
      </svg>
    </div> */}

      {/* experimental (subject to change) */}
      {/* <Canvas id = "canvas"></Canvas> */}

    </div>
  )
}
