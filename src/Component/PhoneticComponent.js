import React from "react";


export default function PhoneticComponent(props){
  return (
    <div className="PhoneticComponent">
      <div className="word-phonetic">
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
        </a>
        <span>/{props.phonetic.text}/</span>
      </div>
    </div>
  );
}