import React from 'react';
import SearchComponent from './SearchComponent';
// import SearchResultComponent from './SearchResultComponent';

export default function MailComponent(props){
  
  return (
    <div className="MainComponent">
      <div className="container-fluid p-0">
        <header className="App-header">
          <SearchComponent />
        </header>
        <div className="content">
          {/* <SearchResultComponent results={props.searchResult}/> */}
        </div>
      </div>
    </div>
  );
}