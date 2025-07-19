import { useState, useEffect } from 'react'
import rose from "../src/assets/images/rose1.jpg"
import audioFile from "../src/assets/audio.mp3"
import { TypeAnimation } from 'react-type-animation'
import TypingText from './assets/conponent/TypingText'

function App() {
  const [sayYes, setSayYes] = useState(false)

  useEffect(() => {
  const audio = new Audio(audioFile);
  audio.loop = true;
  audio.muted = true;
  // Don't call audio.play() immediately here

  const unmuteAudio = () => {
    audio.muted = false;
    audio.play();
  };

  window.addEventListener("click", unmuteAudio, { once: true });

  return () => {
    window.removeEventListener("click", unmuteAudio);
    audio.pause();
  };
}, []);


  return (
    <>
      <div className="container" onClick={()=>sayYes?setSayYes(false):""}>
        <img src={rose} alt="" />
        <div className="box">
          <h1>Will you be mine?</h1>
          <div className="text" style={{display:"flex", flexDirection:"column", gap:"18px",}}>
            <p style={{textAlign:"center", fontSize:"30px"}}>💌 A little note for you, straight from my heart ❤️</p>

            <TypingText/>
          </div>
          <button onClick={() => setSayYes(!sayYes)}>Say yes forever</button>

          {sayYes && (
            <div style={{padding:"10px"}} className="yes-box" onClick={() => setSayYes(!sayYes)}>
              <p >My heart is yours, now and forever. You just completed my world 💖</p>

            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App;
