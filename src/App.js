import React from 'react';
import './App.css';
import FetchQuotes from './comp/FetchQuotes';
import SocialMedia from './comp/SocialMedia'

function App() {
  return (
    <div className="App">
      <h1>
        Fetched text:
      </h1>
      <FetchQuotes/>
      <SocialMedia />
    </div>
  );
}

export default App;
