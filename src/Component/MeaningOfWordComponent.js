import React from 'react';
import SynonymsOfDefinitionComponent from './SynonymsOfDefinitionComponent'; 

export default function MeaningOfWordComponent(props){
  console.log(props.meaning.definitions);
  return (
    <div className="MeaningOfWordComponent">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map((definition,index) =>{
        return (
          <div key={index}>
            <strong>definition:</strong>{" "}
            <p className="meaning-definition">{definition.definition}</p>
            
            <strong>example:</strong>
            <p className="meaning-example">{definition.example}</p>
            
            <SynonymsOfDefinitionComponent synonyms={definition.synonyms} />
            <hr />
          </div>
          
        );
      })}
      
    </div>
  );
}