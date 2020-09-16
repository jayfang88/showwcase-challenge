import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      name: ''
    }
  }

  update(e) {
    // sets state's 'name' to current target of input field
    this.setState({ name: e.currentTarget.value });
  }

  goToMain() {
    // want some way to prevent users from proceeding unless they enter a name
    if (!this.state.name) {
      alert('please enter a name');
      return
    }
    
    // redirect to main page w/ user's entered name
  }

  render() {
    return (
      <div className="App">
        <main className="home">
          <p>Hi there! Welcome to your education showcase.</p>
          <p>Type your name and click "Enter" below to begin!</p>
          <input type="text" onChange={this.update} placeholder='Your Name' className='name-input'
              value={this.state.name}></input>

          {/* Link to main page - currently no way of preventing users from proceeding
          regardless of empty name field or not */}
          <Link className='name-button' to={{pathname: '/main', state:{name: this.state.name}}}>Enter</Link>
          
          {/* <button className='name-button' onClick={() => this.goToMain()}>Enter</button> */}
        </main>
      </div>
    );
  }
}

export default Home;