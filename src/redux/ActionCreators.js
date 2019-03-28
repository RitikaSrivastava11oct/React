import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
// to connect to server
import { baseUrl } from '../shared/baseUrl';



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
    /*setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);*/

    //to fetch the dishes from the REST Api server
    return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
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

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});