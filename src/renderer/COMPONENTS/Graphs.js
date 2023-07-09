import { useNavigate } from 'react-router'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'

import '../App.css'
import '../CSS/Graphs.css'

export default function Graphs() {
  const navigate = useNavigate();
  function handleExit() { // back to home
    navigate("/")
  }

  return (
    <>
      <button className = "small-btn prevent-drag" id = "return" onClick={handleExit}>
        <ArrowBackIosNewIcon id = "go-home"></ArrowBackIosNewIcon>
      </button>
    </>
  )
}
