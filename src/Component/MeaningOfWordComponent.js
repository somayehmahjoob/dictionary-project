import React from 'react';
import SynonymsOfDefinitionComponent from './SynonymsOfDefinitionComponent'; 

export default function MeaningOfWordComponent(props){
  return (
    <div className="MeaningOfWordComponent">
      <div className="box">
        <h2>{props.meaning.partOfSpeech}</h2>
        {props.meaning.definitions.map((definition, index) => {
          return (
            <div key={index}>
              
              <div className="meaning-definition">{definition.definition}</div>
              
              <div className="meaning-example">{definition.example}</div>
              <SynonymsOfDefinitionComponent synonyms={definition.synonyms} />
            </div>
          );
        })}
      </div>
    </div>
  );
}