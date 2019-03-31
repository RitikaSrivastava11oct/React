import * as ActionTypes from './ActionTypes';
/*its a reducer function which receives prev state and action as a parameter and 
returns the next state without changing the prev state*/
export const Promotions = (state  = { isLoading: true,
                                        errMess: null,
                                        promotions:[]} , action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
        return {...state, isLoading: false, errMess: null, promotions: action.payload};

        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading: true, errMess: null, promotions: []}

        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};