import { useNavigate } from 'react-router'
import { useRef, useEffect } from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import '../App.css'
import '../css/Graphs.css'
import { currentUser } from '../../backend/database.js'

const $ = require('jquery')
const svgPanZoom = require('svg-pan-zoom')


const GraphPaper = () => {
  const svgRef = useRef(null)

  useEffect(() => {
    const svg = svgRef.current

    const gridSize = 1200
    const numRows = 40
    const numCols = 40

    const cellSize = gridSize / numRows

    // Create grid lines
    for (let i = 0; i <= numRows; i++) {
      const y = i * cellSize

      // Horizontal lines
      const horizontalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      horizontalLine.setAttribute('x1', '0')
      horizontalLine.setAttribute('y1', y)
      horizontalLine.setAttribute('x2', gridSize.toString())
      horizontalLine.setAttribute('y2', y)

      if (i == numRows / 2) {
        horizontalLine.setAttribute('stroke', 'rgba(0, 0, 0, 1)')
      } else {
        horizontalLine.setAttribute('stroke', 'rgba(0, 0, 0, 0.1)')
      }

      horizontalLine.setAttribute('stroke-width', '1')
      svg.appendChild(horizontalLine)
    }


    for (let j = 0; j <= numCols; j++) {
      const x = j * cellSize;

      // Vertical lines
      const verticalLine = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      verticalLine.setAttribute('x1', x)
      verticalLine.setAttribute('y1', '0')
      verticalLine.setAttribute('x2', x)
      verticalLine.setAttribute('y2', gridSize.toString())

      if (j == numRows / 2) {
        verticalLine.setAttribute('stroke', 'rgba(0, 0, 0, 1)')
      } else {
        verticalLine.setAttribute('stroke', 'rgba(0, 0, 0, 0.1)')
      }

      verticalLine.setAttribute('stroke-width', '1')
      svg.appendChild(verticalLine)
    }
  }, []);

  $(document).ready(function() {
    // console.log("document ready!")
    console.log(document.getElementById("GRAPHS"))

    let panZoomGrid = svgPanZoom('#grid')


  })

  // the div for the graphs takes a bit of time to render.

  return (
    <div id = "graph-paper">
      {/* <svg id = "grid" ref={svgRef} width="800" height="600" style={{ border: '1px solid black' }}></svg> */}
      <svg id = "grid" ref={svgRef} width="1200" height="1200"></svg>


    </div>
  )
}




export default function Graphs() {

  const navigate = useNavigate();
  function handleExit() { // back to home (log out)
    navigate("/")
  }


  return (
    <div id="GRAPHS">
      {/* back/logout button */}
      <button className = "small-btn prevent-drag" id = "return" onClick={handleExit}>
        <ExitToAppIcon id = "go-home"></ExitToAppIcon>
      </button>

      



      <GraphPaper></GraphPaper>

    </div>
  )
}
