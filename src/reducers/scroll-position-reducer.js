import actionTypes from '../actions/action-types.js';

const ScrollPosition = function(state=null, action){
	if(action){
		switch (action.type){
			case actionTypes.UPDATE_SCROLL_POSITION:
				return action.payload;
			case actionTypes.WINDOW_SCROLLING:
				return action.position;
			case actionTypes.WINDOW_NOT_SCROLLING:
				return action.position;
		}	
	}
	return state;
}

export default ScrollPosition;