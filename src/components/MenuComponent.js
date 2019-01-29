import React, { Component } from 'react';
import { Media } from 'reactstrap';
/* to create a new component*/
/* to render it on the browser this menu component will be imported in the App.js file*/

/* extend the component class*/
class Menu extends Component {
  /*first define constructor and call super also*/
    constructor(props) {
        super(props);
        /* use of state inside constructor (this.state={dishes:[{...},{..}...],}; )*/
        this.state = {
          /* create a array of dishes (dishes[])*/
            dishes: [
                {
                  id: 0,
                  name:'Uthappizza',
                  image: 'assets/images/uthappizza.png',
                  category: 'mains',
                  label:'Hot',
                  price:'4.99',
                  description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
               {
                  id: 1,
                  name:'Zucchipakoda',
                  image: 'assets/images/zucchipakoda.png',
                  category: 'appetizer',
                  label:'',
                  price:'1.99',
                  description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
               {
                  id: 2,
                  name:'Vadonut',
                  image: 'assets/images/vadonut.png',
                  category: 'appetizer',
                  label:'New',
                  price:'1.99',
                  description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
               {
                  id: 3,
                  name:'ElaiCheese Cake',
                  image: 'assets/images/elaicheesecake.png',
                  category: 'dessert',
                  label:'',
                  price:'2.99',
                  description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
               ],
        };
    }
    /* this render method will return the content which will be shown on the browser*/
    render() {
      {/* to list the every dish of the dishes array (dishes[])*/}
        const menu = this.state.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 mt-5">

                <Media tag="li">
                  <Media left middle>
                  {/* to show the image*/}
                      <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                  {/* to show the name of dish*/}
                    <Media heading>{dish.name}</Media>
                    {/* to show the description of the dish*/}
                    <p>{dish.description}</p>
                  </Media>
                </Media>

              </div>
            );
        });

        {/* this return function returns the content to be shown*/}
        return (
          <div className="container">
            <div className="row">
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}

{/*to make menu available in other files export it*/}
export default Menu;