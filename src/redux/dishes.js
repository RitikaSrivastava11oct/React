import * as ActionTypes from './ActionTypes';
//reducer function for dishes 
//it takes state and action as paramter
export const Dishes = (state = { isLoading: true,
    errMess: null,
    dishes:[]}, action) => {
	//switch to the type of ation
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
        /*... state -----is a spread operator which takes the existing state ,modifies it and then returns the modified
        state as  a new object*/
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
// as we have nt modified anything therefore we will return the same state in default case
        default:
            return state;
    }
};