import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './header/Header.js';
import Hello from './hello/Hello.js';
import Lenght from './length/Lenght.js';
import Convert from './convert/Convert.js';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {/* <Hello /> */}
        {/* <Lenght /> */}
        <Convert />
      </div>
    );
  }
}

export default App;
