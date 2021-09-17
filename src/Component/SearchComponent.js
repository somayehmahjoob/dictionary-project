import React, { useState } from "react";
import axios from 'axios';
import SearchResultComponent from "./SearchResultComponent";

import "../assets/css/SearchComponent.css";

export default function SearchComponent() {
  const [keyword, setKeyword] = useState(null);

  function handelResponse(response){
    console.log(response.data[0].word);
    
    // if (status === 200) {
    //   console.log(response.data[0]);      
    // } else {
    //   console.log(`Not Found!`);
    // }
    
  }
  function handleSubmit(event) {
    event.preventDefault();    
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handelResponse);    
  }

  function handleChangeKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="SearchComponent">
      <div className="header">
        <div className="Header-Title">Dictionary</div>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Search keyword.."
            onChange={handleChangeKeyword}
          />
          <input type="submit" className="Header-btn" value="Search" />
        </form>
      </div>

      <SearchResultComponent searchResult ={keyword}/>
    </div>
  );
}
