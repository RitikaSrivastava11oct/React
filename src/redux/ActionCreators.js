import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';


//fun to create an action object
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    //data send back by addComment to reducer function is defined under payload
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

/*fetchDishes = () => ----this is the thunk
(dispatch) => { -----this is the inner function
this thunk is performing 2 dispatches*/
export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));
    // after delay of 2 sec it will dispatch the DISHES to the store
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
	//it will return
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});