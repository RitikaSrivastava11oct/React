import React, { Component } from 'react';
//import { Navbar, NavbarBrand } from 'reactstrap';
/* to use the menu  here import MenuComponents */
import Main from './components/MainComponent';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}
export default App;
