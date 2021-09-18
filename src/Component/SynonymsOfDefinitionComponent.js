import React from "react";

export default function SynonymsOfDefinitionComponent(props) {
  if (props.synonyms) {
    return (
      <ul className="SynonymsOfDefinitionComponent">
        <strong>Synonyms:</strong>
        {props.synonyms.map((synonym, index) => {
          return (
            <li className="synonym" key={index}>
              {synonym}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
}
