// src/App.js
import React from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import SearchAnalytics from './components/SearchAnalytics';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Search Analytics</h1>
        <SearchBox />
        <SearchAnalytics />
      </header>
    </div>
  );
}

export default App;
