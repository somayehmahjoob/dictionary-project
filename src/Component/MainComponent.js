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
      <div className="footer">
        This project was coded by Somayeh.Mahjoob and is{" "}
        <a
          href="https://github.com/somayehmahjoob/dictionary-project"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code on GitHub
        </a>
        , and Hosted on and{" "}
        <a
          href="https://amazing-wiles-4ca1c5.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify{" "}
        </a>
      </div>
    </div>
  );
}