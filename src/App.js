import './App.css';

import HeaderComponent from './Component/HeaderComponent';
import SearchResultComponent from './Component/SearchResultComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderComponent />
      </header>
      <div className="content">
        <SearchResultComponent />
      </div>
    </div>
  );
}

export default App;
