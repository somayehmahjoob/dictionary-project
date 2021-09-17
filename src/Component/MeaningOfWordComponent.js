import React from 'react';

export default function MeaningOfWordComponent(props){
  return (
    <div className="MeaningOfWordComponent">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition,index) =>{
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p>{definition.example}</p>
          </div>
        );
      })}
      
    </div>
  );
}