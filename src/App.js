// src/App.js
import React from 'react';
import './App.css';
import SearchBox from './components/SearchBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Analytics</h1>
        <SearchBox />
      </header>
    </div>
  );
}

export default App;
