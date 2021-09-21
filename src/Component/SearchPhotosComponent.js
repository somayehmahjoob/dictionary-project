import React from 'react';

import "../assets/css/SearchPhotosComponent.css";

export default function SearchPhotosComponent(props){ 
  if(props.photos){
    return (
      <div className="SearchPhotosComponent">
        <div className="row box-img">
          {props.photos.map((photo, index) => {
            return (
              <div className="col-md-4 col-sm-6 mb-2" key={index}>
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