import * as ActionTypes from './ActionTypes';

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