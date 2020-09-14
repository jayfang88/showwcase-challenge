import React from 'react';
import './reset.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <main className="main">
        <p>Hi there! Welcome to your education showcase.</p>
        <p>Type your name and click "Enter" below to begin!</p>
        <input type="text" className='name-input'></input>
        <button className='name-button' onClick={() => console.log('hi')}>Enter</button>
      </main>
    </div>
  );
}

export default App;
