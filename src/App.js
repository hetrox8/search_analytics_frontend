import React from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import SearchAnalytics from './components/SearchAnalytics';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>welcome to My.Search Analytics Dashboard</h1>
      </header>
      <main>
        <SearchBox />
        <SearchAnalytics />
      </main>
    </div>
  );
}

export default App;
