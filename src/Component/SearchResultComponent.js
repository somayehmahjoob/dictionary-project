import React from "react";
import MeaningOfWordComponent from "./MeaningOfWordComponent";
import PhoneticComponent from "./PhoneticComponent";


export default function SearchResultComponent(props){

  if (props.searchResult){
    return (
      <div className="SearchResultComponent">
        <div className="Search-Result-main">
          <h2>{props.searchResult.word}</h2>
          {props.searchResult.phonetics.map((phonetic , index) => {
            return (
              <div key={index}>
                <PhoneticComponent phonetic={phonetic} />
              </div>
            );
          })} 

          {props.searchResult.meanings.map((meaning, index) => {
            return (
              <div key={index}>
                <MeaningOfWordComponent meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  else{
    return null;
  }
    
}