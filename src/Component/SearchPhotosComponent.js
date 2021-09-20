import React from 'react';

import "../assets/css/SearchPhotosComponent.css";

export default function SearchPhotosComponent(props){
  if(props.photos){
    return (
      <div className="SearchPhotosComponent">
        <div className="box box-img">
          {props.photos.map((photo, index) => {
            return (
              <div key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt="dictionary"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  else {
    return null;
  }
}