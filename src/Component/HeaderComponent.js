import React, { useState } from "react";
import axios from 'axios';
// import SearchResultComponent from "./SearchResultComponent";

import "../assets/css/HeaderComponent.css";

export default function HeaderComponent() {
  const [keyword, setKeyword] = useState("hi");

  function handelResponse(response){
    // let status= response.status;
    console.log(response.data[0]); 
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
    // <SearchResultComponent keywordSearch={keyword} />;
  }

  function handleChangeKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="HeaderComponent">
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
    </div>
  );
}
