import actionTypes from '../actions/action-types.js';

const BackgroundColorReducer = function(state=null, action){
		if(action){
			switch(action.type){
				case actionTypes.UPDATE_BACKGROUND_COLOR:
					return action.payload
			}
		}
	return state;	
}
export default BackgroundColorReducer;