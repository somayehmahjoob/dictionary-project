import React from "react";

export default function SearchResultComponent(props){
  
  return (
    <div className="SearchResultComponent">
      <div className="Search-Result-main">{props.searchResult}</div>
    </div>
  );
}