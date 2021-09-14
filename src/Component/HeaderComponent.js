import React, { useState } from "react";
// import SearchResultComponent from "./SearchResultComponent";

import "../assets/css/HeaderComponent.css";

export default function HeaderComponent() {
  const [keyword, setKeyword] = useState("hi");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(`${keyword} Header`);
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
