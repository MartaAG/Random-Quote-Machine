import React from 'react';
import './App.css';
import FetchQuotes from './comp/FetchQuotes';

function App() {
  return (
    <div className="App">
      <h1>
        Fetched text:
      </h1>
      <FetchQuotes/>
    </div>
  );
}

export default App;
