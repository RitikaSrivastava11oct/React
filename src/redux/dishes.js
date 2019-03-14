import { DISHES } from '../shared/dishes';
//reducer function for dishes 
//it takes state and action as paramter
export const Dishes = (state = DISHES, action) => {
	//switch to the type of ation
    switch (action.type) {
    	// as we have nt modified anything therefore we will return the same state in default case
        default:
          return state;
      }
};