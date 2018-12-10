import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './items';
import Results from'./results';
import data from './data'

class App extends Component {

  render() {
    return (
      <div class="container">
      <header class="header"><h1>Application</h1></header>
      <div class="body">
         <Items/>
         {/* <Results/> */}
      </div>
     </div>
    );
  }
}

export default App;
