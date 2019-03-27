// main component will act as the container component ,it contains much of the code of app.js file
import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Menu from './MenuComponent';
import About from './AboutComponent';
import DishDetail from './DishDetailComponent';
//to disptach the action to the store we are importing the action
import { addComment, fetchDishes } from '../redux/ActionCreators';
//these states will be moved to reducer.js file bcoz now we will obtain the states from there to use redux
/*import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';*/
import { actions } from 'react-redux-form';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
// to connect main component to redux
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}
{/*this function call where we're calling the action creator will return the action object for 
adding a comment, that action object is then given as a parameter to the dispatch function.
this way addComment will be available to us here ans we can use to send to other component*/}
 const mapDispatchToProps = dispatch => ({
  
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes())},
    //to reset the form after submitting it
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))}
  
  });

class Main extends Component {

  constructor(props) {
    super(props);

    //state is no longer required here as we are using redux now so the states wil be stored in reducer.js file
    /*this.state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
        
    };*/
  }

  componentDidMount() {
    this.props.fetchDishes();
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errMess}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
      );
    }
  
  {/*to show the dish detail when a dish is clicked using route path="/menu/:dishId"  and by using the match prop*/}
   const DishWithId = ({match}) => {
      return(
      
          <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
            isLoading={this.props.dishes.isLoading}
            errMess={this.props.dishes.errMess}
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment}
            />
      );
    };

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
              <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
              <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders}/>} />
              <Redirect to="/home" />
          </Switch>
        <Footer/>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
;