import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
/* to use the menu  here import MenuComponents */
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

class App extends Component {
   constructor(props) {
    super(props);
    /* state information that contains all the dishes is now lifted to our App.js file and  we can make this available to menu component through props*/ 
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}
export default App;
