import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Home extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      name: ''
    }
  }

  update(e) {
    this.setState({ name: e.currentTarget.value });
  }

  goToMain() {
    if (!this.state.name) {
      alert('please enter a name');
      return
    }
    console.log(this.state.name);
  }

  render() {
    const nanana = this.state.name;
    return (
      <div className="App">
        <main className="main">
          <p>Hi there! Welcome to your education showcase.</p>
          <p>Type your name and click "Enter" below to begin!</p>
          <input type="text" onChange={this.update} placeholder='Your Name' className='name-input'
              value={this.name}></input>
          <Link className='name-button' to={{pathname: '/main', state:{name: nanana}}}>Enter</Link>
          {/* <button className='name-button' onClick={() => this.goToMain()}>Enter</button> */}
        </main>
      </div>
    );
  }
}

export default Home;