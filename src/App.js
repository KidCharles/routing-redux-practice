import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './router/routes'
import Header from './Components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {routes}
      </div>
    );
  }
}
export default App;
