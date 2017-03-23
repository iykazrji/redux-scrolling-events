import actionTypes from './action-types.js';

const UpdateBackgroundColorAction = function(color){
	let action = {
		type: actionTypes.UPDATE_BACKGROUND_COLOR,
		payload: color
	}
	return action;
}

export default UpdateBackgroundColorAction;