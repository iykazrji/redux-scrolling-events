import actionTypes from '../actions/action-types.js';

const WindowScrollingState = function(action, state = false){
	if(action){
		switch(action.type){
			case actionTypes.WINDOW_SCROLLING :
				state = true;
			case actionTypes.WINDOW_NOT_SCROLLING :
				state = false;
		}
	}
	return state;
}