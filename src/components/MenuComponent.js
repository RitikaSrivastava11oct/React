import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardTitle, CardBody } from 'reactstrap';
import DishDetail from './DishDetailComponent';
/* to create a new component*/
/* to render it on the browser this menu component will be imported in the App.js file*/

/* extend the component class*/
class Menu extends Component {
  /*first define constructor and call super also*/
    constructor(props) {
        super(props);
        /* use of state inside constructor (this.state={dishes:[{...},{..}...],}; )*/
        this.state = {
          selectedDish: null 

        }
    }
    onDishSelect(dish)
    {
      this.setState({selectedDish:dish});
    }

    /*renderDish(dish)
    {
      if(dish!=null)
      {
        return(
            <Card>
               <CardImg width="100%" src={dish.image} alt={dish.name} />
               <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
          );
      }
      else
      {
        return(
          <div></div>);
      }
    }*/
    
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

        return (
          <div className="container">
            <div className="row">
                  {menu}
            </div>
            <div className="row">
              
               <DishDetail selectedDish={this.state.selectedDish} />
            </div>
          </div>
        );
    }
}
export default Menu;