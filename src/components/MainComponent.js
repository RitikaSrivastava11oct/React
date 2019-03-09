// main component will act as the container component ,it contains much of the code of app.js file
import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { DISHES } from '../shared/dishes';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
        dishes: DISHES,
        
    };
  }

  render() {
    const HomePage = () => {
      return(
          <Home  />
      );
    }

    return (
      <div>
      <Header/>

      {//this will be moved to header component

        /*{<Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>}*/}

        {/*instead of the below two lines we will use the Route component to navigate to home and menu component*/}
        {/*<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />*/}

          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>


        <Footer/>
      </div>
    );
  }
}

export default Main;