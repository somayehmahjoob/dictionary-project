import React from "react";
import sound from "../assets/images/sound.png";

import "../assets/css/PhoneticComponent.css";

export default function PhoneticComponent(props){
  let audio = new Audio(props.phonetic.audio);

  const start = () => {
    audio.play();
  };
  
  return (
    <div className="PhoneticComponent">
      <div className="word-phonetic">
        <button className="word-phonetic-btn" onClick={start}>
          <img src={sound} alt="sound" />
        </button>

        <span>/{props.phonetic.text}/</span>
      </div>
    </div>
  );
}