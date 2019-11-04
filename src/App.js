import React from 'react';
import './App.css';
import FetchQuotes from './comp/FetchQuotes';

function App() {
  return (
    <div className="App">
  
      <main className="Site-content" id="quote-box">
      <FetchQuotes/>
      </main>
      <footer className="footer">Random Quote Machine by
        <a
          href="https://github.com/MartaAG"
          target='_blank'
          rel="noopener noreferrer"
          > MartaAG.</a></footer>
    </div>
  );
}

export default App;
