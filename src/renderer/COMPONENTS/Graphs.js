import { useNavigate } from 'react-router'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'



import '../App.css'
import '../CSS/Graphs.css'


// And pass it to panzoom
// panzoom(element)

export default function Graphs() {
  // append panzoom script to head tag in app
  // useEffect(() => {
  //   const head = document.querySelector("head");
  //   const script = document.createElement("script");

  //   script.setAttribute("src", "https://unpkg.com/panzoom@9.4.0/dist/panzoom.min.js");
  //   head.appendChild(script);

  //   return () => {
  //     head.removeChild(script);
  //   };
  // });

  let element = document.querySelector('#scene')


  const navigate = useNavigate();
  function handleExit() { // back to home
    navigate("/")
  }

  function handleFullExit() { // back to main page

  }

  return (
    <>
      {/* back button */}
      <button className = "small-btn prevent-drag" id = "return" onClick={handleExit}>
        <ArrowBackIosNewIcon id = "go-home"></ArrowBackIosNewIcon>
      </button>
      {/* logout button */}
      <button className = "small-btn prevent-drag" onClick={handleFullExit}>
        <ExitToAppIcon id = "go-home-full"></ExitToAppIcon>
      </button>
      <div id = "scene"></div>
    </>
  )
}
