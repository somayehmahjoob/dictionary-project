import React from "react";
import ReactAudioPlayer from "react-audio-player";


export default function PhoneticComponent(props){
  return (
    <div className="PhoneticComponent">
      <div className="word-phonetic">
        <ReactAudioPlayer
          src={props.phonetic.audio}
          controls
          crossOrigin
          className="audio"
        />
        
        <p>{props.phonetic.text}</p>
      </div>
    </div>
  );
}