import React from "react";
import MeaningOfWordComponent from "./MeaningOfWordComponent";

export default function SearchResultComponent(props){
  console.log(props.searchResult);
  if (props.searchResult){
    return (
      <div className="SearchResultComponent">
        <div className="Search-Result-main">
          <h2>{props.searchResult.word}</h2>
          <p>
            <em>{props.searchResult.phonetic}</em>
          </p>
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