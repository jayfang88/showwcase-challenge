import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      name: '',
      error: ''
    };

    this.updateError = this.updateError.bind(this);
  }

  update(e) {
    // sets state's 'name' to current target of input field
    this.setState({ name: e.currentTarget.value });
  }
  
  updateError() {
    // set state's 'error' to a message prompting user to enter a name'
    this.setState({ error: '*Please enter your name before continuing' });
    console.log(this.state.error);
  }

  render() {
    return (
      <div className="App">
        <main className="home">
          <p>Hi there! Welcome to your education showcase.</p>
          <p>Type your name and click "Enter" below to begin!</p>
          <input type="text" onChange={this.update} placeholder='Your Name' className='name-input'
              value={this.state.name}></input>

          {/* Check if 'name' field is empty to decide if button will be a
              real link or simply display error message */}
          {this.state.name.length > 0 ? (
            <Link className='name-button' to={{pathname: '/main', state:{name: this.state.name}}}>Enter</Link>
          ) : (
            <button className='name-button'
              onClick={() => this.updateError()}>Enter</button>
          )}
          {this.state.name.length > 0 ? (
            <div className='error'></div>
          ) : (
            <div className='error'>{this.state.error}</div>
          )}
        </main>
      </div>
    );
  }
}

export default Home;