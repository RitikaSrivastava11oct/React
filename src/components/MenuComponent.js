import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';

import DishDetail from './DishDetailComponent';
/* to create a new component*/
/* to render it on the browser this menu component will be imported in the App.js file*/

/* extend the component class*/
/* To create a new component,a class component*/
class Menu extends Component {
  /*first define constructor and call super also*/
    constructor(props) {
        super(props);
        /* use of state inside constructor (this.state={dishes:[{...},{..}...],}; )*/
        this.state = {
          selectedDish: null 

        }
        console.log('menu component constructor() is invoked which is one of the mounting lifecycle method');
    }

    componentDidMount()
    {
      console.log('menu component componentDidMount() is invoked which is one of the mounting lifecycle method');
    }
    onDishSelect(dish)
    {
      this.setState({selectedDish:dish});
    }

   
    
    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12  col-md-5 m-1">

                <Card onClick={() =>this.onDishSelect(dish)}>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />

                    <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>

              </div>
            );
        });

        console.log('menu component render() is invoked which is one of the mounting lifecycle method');

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
            <DishDetail selectedDish={this.state.selectedDish}/>
           
          </div>
        );
    }
}
export default Menu;