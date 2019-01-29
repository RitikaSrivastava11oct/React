import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
/* to use the menu  here import MenuComponents */
import Menu from './components/MenuComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}
export default App;
