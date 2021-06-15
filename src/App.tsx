import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Still under-construction
        </p>
        <span>
          <span>My other websites </span>
          <a
            className="App-link"
            href="https://restaurant-book-2021.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Restaurant Book 2021
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://algo-visualizer-2021.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Algo visualizer
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
