import React from "react";
import ReactAudioPlayer from "react-audio-player";


export default function PhoneticComponent(props){
  return (
    <div className="PhoneticComponent">
      <div className="word-phonetic">
        <span>/{props.phonetic.text}/</span>
        <div className="audio">
          <ReactAudioPlayer src={props.phonetic.audio} controls crossOrigin style={{height:20, marginLeft:11}}/>
        </div>
      </div>
    </div>
  );
}