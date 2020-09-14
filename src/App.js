import React from 'react';
import './reset.css';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
  }

  update(e) {
    this.name = e.currentTarget.value;
  }

  goToMain() {
    if (!this.name) {
      alert('please enter a name');
      return
    }
    
    console.log(this.name);
  }

  render() {
    return (
      <div className="App">
        <main className="main">
          <p>Hi there! Welcome to your education showcase.</p>
          <p>Type your name and click "Enter" below to begin!</p>
          <input type="text" onChange={this.update} placeholder='Your Name' className='name-input'
            value={this.name}></input>
          <button className='name-button' onClick={() => this.goToMain()}>Enter</button>
        </main>
      </div>
    );
  }
}

export default App;
