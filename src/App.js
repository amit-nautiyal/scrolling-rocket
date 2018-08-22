import React, { Component } from 'react';
import AnimationArea from './AnimationArea';
import logo from './logo.svg';
import rocket from './rocket-sm.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Animating Rocket based on mouse scroll</h1>
        </header>
        <section className='section'>
          <AnimationArea>
            <img src={rocket} alt='' />
          </AnimationArea>
        </section>
      </div>
    )
  }
}

export default App;
