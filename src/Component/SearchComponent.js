import React, { useState } from "react";
import axios from "axios";
import SearchResultComponent from "./SearchResultComponent";
import SearchPhotosComponent from "./SearchPhotosComponent";

import "../assets/css/SearchComponent.css";

export default function SearchComponent() {
  const [keyword, setKeyword] = useState(null);
  const [result, setResult] = useState(null);
  const [photo, setPhoto] = useState(null);

  function handelResponse(response) {
    setResult(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhoto(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handelResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001a498472e6cd347d2afa4ed65496be258";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
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

      <SearchResultComponent searchResult={result} />
      <SearchPhotosComponent photos={photo} />
    </div>
  );
}
